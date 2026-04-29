# Laravel REST API Implementation Guide

> **Project:** Lab 05 — Laravel API Development  
> **Author:** Senior Developer Notes  
> **Stack:** Laravel 13 (API Mode), Sanctum, SQLite, PHP 8.3+

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Database Layer](#2-database-layer)
3. [API Resource Layer](#3-api-resource-layer)
4. [Authentication with Sanctum](#4-authentication-with-sanctum)
5. [Custom Middleware](#5-custom-middleware)
6. [Routing & Middleware Composition](#6-routing--middleware-composition)
7. [Testing the API](#7-testing-the-api)
8. [Key Decisions & Best Practices](#8-key-decisions--best-practices)

---

## 1. Architecture Overview

We transformed a standard Laravel web application into a **headless REST API backend**. Instead of returning Blade views, every controller now returns JSON responses. This follows Laravel's API-first design philosophy introduced in Laravel 11/13, where API routes are cleanly separated from web routes.

### Why This Architecture?

- **Separation of Concerns:** `routes/api.php` handles machine-to-machine communication; `routes/web.php` handles human-to-machine (HTML views).
- **Scalability:** APIs can serve mobile apps, SPAs (React/Vue), or third-party integrations simultaneously.
- **Statelessness:** We use token-based authentication (Sanctum) instead of session cookies, which is the HTTP-standard for APIs.

---

## 2. Database Layer

### 2.1 Migration: `create_articles_table`

Migrations are Laravel's version-controlled schema builder. Think of them as Git for your database structure.

```php
Schema::create('articles', function (Blueprint $table) {
    $table->id();           // Big unsigned auto-increment PK
    $table->string('title');
    $table->text('content');
    $table->timestamps();    // created_at + updated_at
});
```

**Senior Notes:**
- We use `$table->string()` for short text (VARCHAR 255) and `$table->text()` for longer content. This is a database-level performance and storage optimization.
- `timestamps()` is non-negotiable in production; it provides audit trails and enables Eloquent's `latest()`, `oldest()`, and soft-delete patterns.

### 2.2 Model: `Article`

```php
class Article extends Model
{
    protected $fillable = ['title', 'content'];
}
```

**Why `$fillable` instead of `$guarded`?**

In production APIs, **mass assignment protection is critical**. `$fillable` is a whitelist approach — only `title` and `content` can be filled via `Article::create($request->all())`. If we used `$guarded = []` (blacklist), a malicious client could inject a `user_id` or `is_admin` field if we forgot to guard it. Whitelisting is defensive programming.

---

## 3. API Resource Layer

### 3.1 Eloquent API Resources (`ArticleResource`)

```php
class ArticleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'      => $this->id,
            'title'   => $this->title,
            'content' => $this->content,
        ];
    }
}
```

**Why use API Resources instead of `return Article::all()`?**

Raw Eloquent collections leak internal database fields (like `created_at`, `updated_at`, pivot data, hidden relations). Resources act as a **presentation layer / DTO (Data Transfer Object)**:

- **Field Control:** You decide exactly what the client sees.
- **Consistent Shape:** Even if the DB schema changes, the API response shape remains stable — backward compatibility.
- **Nested Data:** You can embed relations (`'author' => new UserResource($this->user)`) without N+1 issues when combined with eager loading.

### 3.2 Controller: `Api/ArticleController`

```php
class ArticleController extends Controller
{
    public function index()
    {
        return ArticleResource::collection(Article::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'   => 'required',
            'content' => 'required',
        ]);
        return new ArticleResource(Article::create($validated));
    }

    public function show(string $id)
    {
        return new ArticleResource(Article::findOrFail($id));
    }

    public function update(Request $request, string $id)
    {
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return new ArticleResource($article);
    }

    public function destroy(string $id)
    {
        Article::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
}
```

**Senior Notes:**
- `findOrFail()` throws a `ModelNotFoundException`, which Laravel automatically converts to a **404 JSON response** in API mode. No manual `if (!$article)` checks needed.
- `php artisan make:controller Api/ArticleController --api` scaffolds the 5 standard REST methods, excluding `create` and `edit` (those are for HTML forms, irrelevant to JSON APIs).
- Validation returns a **422 Unprocessable Entity** with error details automatically — another Laravel convention for APIs.

---

## 4. Authentication with Sanctum

### 4.1 Why Sanctum?

Laravel Sanctum is the default API authentication package for Laravel. It supports two modes:

1. **SPA Authentication:** Cookie-based (for same-domain SPAs).
2. **Token Authentication:** Plain Bearer tokens (for mobile apps, third-party APIs, Postman).  
   **→ We chose Token mode** because it is the simplest and most universal for learning APIs.

### 4.2 User Model Integration

```php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;
}
```

`HasApiTokens` injects methods like `createToken()`, `tokens()`, and `currentAccessToken()` into the User model.

### 4.3 Auth Controller

```php
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ]);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ]);
    }
}
```

**Senior Notes:**
- `Hash::make()` uses **bcrypt** by default (cost factor 12). Never store plaintext passwords.
- `createToken('api-token')` stores a hashed token in `personal_access_tokens` table and returns the **plaintext token only once**. If the client loses it, they must regenerate.
- In production, you should add validation rules (`required|email`, `min:8`) and rate-limiting (`throttle:5,1`) to these endpoints.

---

## 5. Custom Middleware

### 5.1 `CheckAppKey`

```php
class CheckAppKey
{
    public function handle(Request $request, Closure $next): Response
    {
        $key = $request->header('X-APP-KEY');

        if ($key !== 'my-secret-key') {
            return response()->json([
                'message' => 'Invalid or missing APP KEY'
            ], 403);
        }

        return $next($request);
    }
}
```

**What is Middleware?**

Middleware is the **HTTP pipeline** — every request passes through a stack of middleware before hitting your controller. It's the ideal place for cross-cutting concerns: authentication, authorization, logging, CORS, and custom header validation.

### 5.2 Why a Custom Header Key?

In real-world systems, this pattern is used for:
- **API Gateway validation:** Ensuring only approved clients (mobile apps, partner services) can reach the backend.
- **Rate-limiting segmentation:** Different keys can have different quotas.
- **Basic bot protection:** Prevents random curl scanners from hitting your API (security through obscurity layer).

In production, you'd replace the hardcoded string with a database lookup or environment variable.

### 5.3 Registration in `bootstrap/app.php`

```php
->withMiddleware(function (Middleware $middleware): void {
    $middleware->alias([
        'check.app.key' => \App\Http\Middleware\CheckAppKey::class,
    ]);
})
```

Laravel 13 uses the `bootstrap/app.php` **Application Builder** pattern (introduced in Laravel 11). We register middleware aliases here instead of the old `Kernel.php` approach.

---

## 6. Routing & Middleware Composition

### 6.1 `routes/api.php`

```php
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'check.app.key'])->group(function () {
    Route::apiResource('articles', ArticleController::class);
});
```

### 6.2 Middleware Order & Logic

The array `['auth:sanctum', 'check.app.key']` is executed **left to right**:

1. `auth:sanctum` first validates the `Authorization: Bearer <token>` header. If invalid/missing → **401 Unauthenticated**.
2. `check.app.key` then validates `X-APP-KEY`. If invalid/missing → **403 Forbidden**.

**Why this order?** Authentication (who are you?) should always run before authorization/app-level validation (are you allowed?). It prevents unnecessary app-key lookups for unauthenticated requests.

### 6.3 `apiResource()` vs `resource()`

| Verb | URI | Action | Purpose |
|------|-----|--------|---------|
| GET | `/api/articles` | `index` | List all |
| POST | `/api/articles` | `store` | Create |
| GET | `/api/articles/{id}` | `show` | Read one |
| PUT/PATCH | `/api/articles/{id}` | `update` | Update |
| DELETE | `/api/articles/{id}` | `destroy` | Delete |

`apiResource()` excludes `create` and `edit` routes (which render HTML forms). Perfect for JSON APIs.

---

## 7. Testing the API

### 7.1 End-to-End Test Flow

```bash
# Step 1: Register
POST /api/register
Body: {"name":"Test","email":"test@example.com","password":"password123"}
Response: {"user":{...}, "token":"1|..."}

# Step 2: Use token for protected routes
GET /api/articles
Headers:
  Authorization: Bearer <token>
  X-APP-KEY: my-secret-key
```

### 7.2 Expected Middleware Behaviors

| Scenario | Expected Status | Body |
|----------|----------------|------|
| Valid token + valid key | 200 | JSON data |
| Valid token + missing key | 403 | `{"message":"Invalid or missing APP KEY"}` |
| Missing token + valid key | 401 | `{"message":"Unauthenticated."}` |
| Wrong token | 401 | `{"message":"Unauthenticated."}` |

These tests confirm your middleware stack is working correctly in sequence.

---

## 8. Key Decisions & Best Practices

### 8.1 API-First Design
We created `routes/api.php` and used `--api` controller flag. This keeps the API isolated from the web frontend, allowing parallel development (frontend team uses JSON; backend team evolves endpoints).

### 8.2 Resource Wrapping
Every controller returns an `ArticleResource` or `ArticleResource::collection()`. This creates a consistent JSON envelope (`{"data": [...]}`) and protects internal model fields.

### 8.3 Middleware Composition
Combining `auth:sanctum` (standard Laravel auth) with a custom `check.app.key` (business logic) demonstrates how middleware stacks compose cleanly without polluting controllers.

### 8.4 Security Layers
- **Layer 1:** Transport (HTTPS in production)
- **Layer 2:** Authentication (Sanctum Bearer tokens)
- **Layer 3:** App-level validation (X-APP-KEY)
- **Layer 4:** Mass-assignment protection (`$fillable`)

### 8.5 Stateless Architecture
No sessions, no cookies. Every request is self-contained with the token in the `Authorization` header. This is the RESTful ideal — servers don't store client state between requests.

---

## File Structure Reference

```
lab_05/
├── app/
│   ├── Models/
│   │   ├── Article.php              # $fillable model
│   │   └── User.php                 # HasApiTokens trait
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Api/
│   │   │       ├── ArticleController.php   # CRUD API
│   │   │       └── AuthController.php      # Register/Login
│   │   ├── Resources/
│   │   │   └── ArticleResource.php         # JSON transformer
│   │   └── Middleware/
│   │       └── CheckAppKey.php             # Custom header validation
│   └── ...
├── bootstrap/
│   └── app.php                      # Middleware aliases, routing config
├── database/
│   └── migrations/
│       ├── 2026_04_29_..._create_articles_table.php
│       └── 2026_04_29_..._create_personal_access_tokens_table.php
├── routes/
│   ├── api.php                      # All API routes
│   └── web.php                      # Web routes (unchanged)
└── composer.json                    # laravel/sanctum dependency
```

---

## Next Steps (Production Readiness)

If you were to deploy this:

1. **Validation Rules:** Add `required|string|max:255` to controllers.
2. **Rate Limiting:** Apply `throttle:60,1` to API routes.
3. **API Versioning:** Prefix routes with `/api/v1/` for future backward compatibility.
4. **FormRequest Classes:** Extract validation logic into `StoreArticleRequest` classes.
5. **Soft Deletes:** Add `$table->softDeletes()` to migrations for safe recovery.
6. **Policies:** Add `ArticlePolicy` so users can only edit their own articles.
7. **Caching:** Cache `index()` with `Cache::remember('articles', 3600, fn() => Article::all())`.

---

> *"Build APIs as if the person maintaining them is a violent psychopath who knows where you live."*  
> — Adapted API Design Philosophy

Happy coding!
