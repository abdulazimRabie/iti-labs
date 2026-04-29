# Lab 4 Implementation Notes

This document explains the topics implemented in Lab 4 and how they were applied to the project.

---

## 1. Image Upload (Post Image)

### What was done
- Added an `image` column to the `posts` table via migration.
- Enabled image upload on **Create Post** and **Edit Post** forms.
- Used Laravel **Storage** (`public` disk) to store uploaded images in `storage/app/public/posts/`.
- Created a **symbolic link** (`php artisan storage:link`) so images are accessible via `/storage/...`.
- Images are displayed in the post listing (`index`), post details, and edit form.

### Validation
```php
"image" => "nullable|image|mimes:jpg,png|max:2048"
```
Only `.jpg` and `.png` files are accepted, up to 2MB.

### Mutator (Cleaner Code)
In `app/Models/Post.php`:
```php
public function setImageAttribute($value)
{
    if ($value && is_file($value)) {
        // Delete old image if it exists
        if ($this->image && Storage::disk('public')->exists($this->image)) {
            Storage::disk('public')->delete($this->image);
        }
        $this->attributes['image'] = $value->store('posts', 'public');
    } elseif ($value) {
        $this->attributes['image'] = $value;
    }
}
```
This mutator handles both storing new files and deleting the previous image automatically whenever a post is updated.

### Cleanup on Delete
In `app/Models/Post.php` booted event:
```php
static::deleting(function (Post $post) {
    if ($post->image && Storage::disk('public')->exists($post->image)) {
        Storage::disk('public')->delete($post->image);
    }
});
```
When a post is deleted, its associated image is also removed from storage.

### Files Changed
- `database/migrations/2026_04_29_000002_add_image_to_posts_table.php` — adds `image` column
- `app/Models/Post.php` — added mutator and `deleting` event
- `app/Http/Controllers/PostController.php` — added validation and file handling
- `resources/views/posts/create.blade.php` — added file input (`enctype="multipart/form-data"`)
- `resources/views/posts/edit.blade.php` — added file input + current image preview
- `resources/views/posts/index.blade.php` — displays post thumbnail
- `resources/views/posts/postDetails.blade.php` — displays post image

---

## 2. Policy (Post Management Authorization)

### What was done
- Created `PostPolicy` to restrict who can update or delete a post.
- **Only the owner** of a post can update or delete it.

### Policy Rules
| Action | Rule |
|--------|------|
| `viewAny` | Any authenticated user |
| `view` | Any authenticated user |
| `create` | Any authenticated user |
| `update` | Only post owner (`$user->id === $post->user_id`) |
| `delete` | Only post owner (`$user->id === $post->user_id`) |
| `restore` / `forceDelete` | Only post owner |

### How it is enforced
In `PostController`, every relevant method calls:
```php
$this->authorize('action', $post);
// or
$this->authorize('create', Post::class);
```
This throws a 403 Forbidden error automatically if the user is not authorized.

### Blade Usage
In `postDetails.blade.php`, buttons are conditionally shown using:
```blade
@can('update', $post)
    <a href="/posts/edit/{{ $post->id }}">Edit</a>
@endcan

@can('delete', $post)
    <form action="/posts/delete/{{ $post->id }}" method="POST">...</form>
@endcan
```

### Files Changed / Created
- `app/Policies/PostPolicy.php` — **Created**
- `app/Providers/AuthServiceProvider.php` — **Created** (registers `PostPolicy`)
- `app/Http/Controllers/PostController.php` — added `$this->authorize(...)` calls
- `resources/views/posts/postDetails.blade.php` — uses `@can` directives

---

## 3. Gates (Admin Access Control)

### What was done
- Added a `role` column to the `users` table with values: `user`, `admin`, `super-admin`.
- Defined two gates: `is-admin` and `is-super-admin`.
- Used `Gate::before` so that **super-admin** bypasses **all** authorization checks automatically.

### Role Logic
| Role | Permissions |
|------|-------------|
| `user` | Normal user (own posts/comments only) |
| `admin` | Can access admin dashboard, create/delete posts and comments |
| `super-admin` | Can do **everything**; bypasses all checks via `Gate::before` |

### Gate Definitions (in `AuthServiceProvider`)
```php
Gate::define('is-admin', function (User $user) {
    return $user->role === 'admin' || $user->role === 'super-admin';
});

Gate::define('is-super-admin', function (User $user) {
    return $user->role === 'super-admin';
});

Gate::before(function (User $user) {
    if ($user->role === 'super-admin') {
        return true;
    }
});
```

### Blade Usage
```blade
@can('is-admin')
    <a href="{{ route('admin.dashboard') }}">Admin Dashboard</a>
@endcan
```

### Comment Controller Integration
Admin users can also edit/delete any comment:
```php
if ($comment->user_id !== auth()->id() && !Gate::allows('is-admin')) {
    abort(403);
}
```

### Admin Dashboard
- Route: `/admin`
- Protected by `middleware('can:is-admin')`
- View: `resources/views/admin/dashboard.blade.php`

### Files Changed / Created
- `database/migrations/2026_04_29_000001_add_role_to_users_table.php` — **Created**
- `app/Providers/AuthServiceProvider.php` — **Created**
- `app/Models/User.php` — added `role` to `$fillable`
- `app/Http/Controllers/CommentController.php` — admin check on edit/update/destroy
- `routes/web.php` — added `/admin` route with `can:is-admin` middleware
- `resources/views/admin/dashboard.blade.php` — **Created**
- `resources/views/layout.blade.php` — admin link in navigation
- `resources/views/dashboard.blade.php` — admin link shown to admins
- `resources/views/posts/index.blade.php` — admin dashboard button
- `database/factories/UserFactory.php` — added default `role => 'user'`

---

## 4. GitHub Login (Socialite)

### What was done
- Installed `laravel/socialite` package via Composer.
- Configured GitHub OAuth credentials in `.env` and `config/services.php`.
- Created a controller to handle redirect and callback.
- On callback: if the GitHub user does not exist locally, a new user is created; then they are logged in.
- Added a **"Login with GitHub"** button on the login page.
- After login, user is redirected to `/dashboard` where their name and email are shown.

### Files Created by Socialite (Package)
When you run:
```bash
composer require laravel/socialite
```
The following files/folders are added inside `vendor/` (managed by Composer, do not edit):
```
vendor/laravel/socialite/
vendor/league/oauth1-client/
vendor/firebase/php-jwt/
vendor/paragonie/constant_time_encoding/
vendor/paragonie/random_compat/
vendor/phpseclib/phpseclib/
```

### Custom Files Created / Changed
| File | Purpose |
|------|---------|
| `app/Http/Controllers/Auth/GitHubController.php` | **Created** — handles redirect and callback |
| `config/services.php` | Added `github` config block |
| `.env` / `.env.example` | Added `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GITHUB_REDIRECT_URL` |
| `routes/web.php` | Added `/auth/github` and `/auth/github/callback` routes |
| `resources/views/auth/login.blade.php` | Added "Login with GitHub" button |
| `resources/views/dashboard.blade.php` | Shows logged-in user's name and email |

### How the Login Flow Works
1. User clicks **"Login with GitHub"**.
2. Redirected to GitHub OAuth authorization page.
3. GitHub redirects back to `/auth/github/callback` with a code.
4. Socialite fetches the user's GitHub profile (name, email, etc.).
5. Application calls `User::updateOrCreate()` by email:
   - If user exists → logs them in.
   - If user is new → creates them with a random password and logs them in.
6. Redirect to `/dashboard`.

### Setting Up GitHub OAuth
Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App:
- **Authorization callback URL**: `http://localhost:8000/auth/github/callback`
- Copy **Client ID** and **Client Secret** into `.env`:
```env
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
GITHUB_REDIRECT_URL=http://localhost:8000/auth/github/callback
```

---

## 5. Summary of All New / Modified Files

### New Files
```
database/migrations/2026_04_29_000001_add_role_to_users_table.php
database/migrations/2026_04_29_000002_add_image_to_posts_table.php
app/Policies/PostPolicy.php
app/Providers/AuthServiceProvider.php
app/Http/Controllers/Auth/GitHubController.php
resources/views/admin/dashboard.blade.php
```

### Modified Files
```
app/Models/Post.php               (mutator + deleting event)
app/Models/User.php               (role in fillable)
app/Http/Controllers/Controller.php (added AuthorizesRequests, ValidatesRequests traits)
app/Http/Controllers/PostController.php (image upload + authorize calls)
app/Http/Controllers/CommentController.php (admin gate checks)
bootstrap/providers.php           (registered AuthServiceProvider)
routes/web.php                    (github routes + admin route)
config/services.php                 (github credentials)
resources/views/posts/create.blade.php
resources/views/posts/edit.blade.php
resources/views/posts/index.blade.php
resources/views/posts/postDetails.blade.php
resources/views/auth/login.blade.php
resources/views/dashboard.blade.php
resources/views/layout.blade.php
.env
.env.example
database/factories/UserFactory.php  (default role)
```

---

## 6. Useful Artisan Commands Used

```bash
# Install Socialite
composer require laravel/socialite

# Create storage symlink for public image access
php artisan storage:link

# Run migrations
php artisan migrate

# Route list (useful for debugging)
php artisan route:list
```
