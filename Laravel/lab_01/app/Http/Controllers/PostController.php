<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public $posts = [
        ['title' => 'Ttile one', 'body' => 'Body one'],
        ['title' => 'Ttile two ', 'body' => 'Body two '],
        ['title' => 'Ttile three ', 'body' => 'Body three ']
    ];

    function allPosts() {
        return view('Posts.posts', ['posts' => $this->posts]);
    }

    function post($post_id) {
        return view('Posts.post', ['post' => $this->posts[$post_id]]);
    }
}
