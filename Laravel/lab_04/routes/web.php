<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Auth\GitHubController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/auth/github', [GitHubController::class, 'redirect'])->name('github.login');
Route::get('/auth/github/callback', [GitHubController::class, 'callback'])->name('github.callback');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/profile/{user_id}', [ProfileController::class, 'show']);

    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/create', [PostController::class, 'create']);

    Route::post('/posts', [PostController::class, 'storePost']);

    Route::get('/posts/edit/{post_id}', [PostController::class, 'editForm']);
    Route::get('/posts/{post_id}', [PostController::class, 'showPostDetails']);

    Route::put('/posts/update/{post_id}', [PostController::class, 'updatePost']);
    Route::delete('/posts/delete/{post_id}', [PostController::class, 'deletePost']);

    Route::put('/posts/restore', [PostController::class, 'restoreDeletedPosts']);

    Route::resource('comments', CommentController::class);

    Route::get('/admin', function () {
        return view('admin.dashboard');
    })->middleware('can:is-admin')->name('admin.dashboard');
});

require __DIR__.'/auth.php';
