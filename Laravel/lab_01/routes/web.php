<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return view('slider');
    // return view('welcome');
    // return view('home');
});


Route::get('/posts', [PostController::class , 'allPosts']);

Route::get('/posts/{post_index}', [PostController::class, 'post']);
