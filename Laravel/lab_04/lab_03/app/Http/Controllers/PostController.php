<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    //
    function index() {
        // $posts = Post::all();
        $posts = Post::latest()->paginate(10);

        return view('posts.index', compact('posts'));
    }

    function showPostDetails($id) {
        // $post = Post::findOrFail($id);
        $post = Post::with('comments.user')->findOrFail($id);
        return view('posts.postDetails', compact('post'));
    }

    function create() {
        return view('posts.create');
    }

    function storePost() {
        $post = new Post();

        request()->validate([
            "title" => "required|max:255|min:3",
            "content" => "required|max:255|min:3"
        ]);

        $post->title = request()->title;
        $post->content = request()->content;
        $post->user_id = auth()->id();
        $post->save();

        return redirect('/posts');
    }

    function editForm($post_id) {
        $post = Post::findOrFail($post_id);
        return view('posts.edit', compact('post'));
    }

    function updatePost($post_id) {
        $post = Post::findOrFail($post_id);

        request()->validate([
            "title" => "required|max:255|min:3",
            "content" => "required|max:255|min:3"
        ]);

        $post->title = request()->title;
        $post->content = request()->content;
        $post->save();

        return redirect('/posts');
    }

    function deletePost($post_id) {
        $post = Post::findOrFail($post_id);

        $post->delete();

        return redirect('/posts');
    }

    function restoreDeletedPosts() {
        Post::onlyTrashed()->restore();

        return redirect('/posts');
    }
}
