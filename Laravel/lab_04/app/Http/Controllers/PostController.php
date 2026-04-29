<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;

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
        $this->authorize('create', Post::class);
        return view('posts.create');
    }

    function storePost() {
        $this->authorize('create', Post::class);

        $validated = request()->validate([
            "title" => "required|max:255|min:3",
            "content" => "required|max:255|min:3",
            "image" => "nullable|image|mimes:jpg,png|max:2048"
        ]);

        $post = new Post();
        $post->title = $validated['title'];
        $post->content = $validated['content'];
        $post->user_id = auth()->id();
        if (request()->hasFile('image')) {
            $post->image = request()->file('image');
        }
        $post->save();

        return redirect('/posts');
    }

    function editForm($post_id) {
        $post = Post::findOrFail($post_id);
        $this->authorize('update', $post);
        return view('posts.edit', compact('post'));
    }

    function updatePost($post_id) {
        $post = Post::findOrFail($post_id);
        $this->authorize('update', $post);

        $validated = request()->validate([
            "title" => "required|max:255|min:3",
            "content" => "required|max:255|min:3",
            "image" => "nullable|image|mimes:jpg,png|max:2048"
        ]);

        $post->title = $validated['title'];
        $post->content = $validated['content'];
        if (request()->hasFile('image')) {
            $post->image = request()->file('image');
        }
        $post->save();

        return redirect('/posts');
    }

    function deletePost($post_id) {
        $post = Post::findOrFail($post_id);
        $this->authorize('delete', $post);

        $post->delete();

        return redirect('/posts');
    }

    function restoreDeletedPosts() {
        Post::onlyTrashed()->restore();

        return redirect('/posts');
    }
}
