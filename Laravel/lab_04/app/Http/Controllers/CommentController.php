<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use Illuminate\Support\Facades\Gate;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCommentRequest $request)
    {
        //
        // $request->validate([
        //     'content' => 'required'
        // ]);
    
        Comment::create([
            'content' => $request->content,
            'user_id' => auth()->id(),
            'post_id' => $request->post_id,
        ]);
    
        // return redirect()->route('posts.show', $id);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        $comment = Comment::with('post')->findOrFail($id);

        if ($comment->user_id !== auth()->id() && !Gate::allows('is-admin')) {
            abort(403);
        }

        return view('comments.edit', compact('comment'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, string $id) {
        $comment = Comment::findOrFail($id);

        if ($comment->user_id !== auth()->id() && !Gate::allows('is-admin')) {
            abort(403);
        }

        // $request->validate([
        //     'content' => 'required'
        // ]);

        $comment->update([
            'content' => $request->content
        ]);

        return redirect('/posts/' . $comment->post_id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $comment = Comment::findOrFail($id);

        if ($comment->user_id !== auth()->id() && !Gate::allows('is-admin')) {
            abort(403);
        }

        $postId = $comment->post_id;

        $comment->delete();

        return redirect('/posts/' . $postId);
    }
}
