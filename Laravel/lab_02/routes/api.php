<?php 

use Illuminate\Support\Facades\Route;
use App\Models\Post;

Route::get('/posts/{id}', function ($id) {
    $post = Post::findOrFail($id);

    return response()->json([
        'title' => $post->title,
        'content' => $post->content,
        'created_at' => $post->created_at->format('M d, Y'),
    ]);
});