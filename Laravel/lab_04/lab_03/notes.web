<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return redirect('/posts');
});


Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/create', [PostController::class, 'create']);

Route::post('/posts', [PostController::class, 'storePost']);

Route::get('/posts/edit/{post_id}', [PostController::class, 'editForm']);
Route::get('/posts/{post_id}', [PostController::class, 'showPostDetails']);


Route::put('/posts/update/{post_id}', [PostController::class, 'updatePost']);
Route::delete('/posts/delete/{post_id}', [PostController::class, 'deletePost']);

Route::put('/posts/restore', [PostController::class, 'restoreDeletedPosts']);
