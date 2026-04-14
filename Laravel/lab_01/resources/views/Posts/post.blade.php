@extends('home')

@section('PageTitle')
    {{ $post['title'] }}
@endsection

@section('content')

    <div class="card">
    <div class="card-header">
        Post Details
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ $post['title'] }}</h5>
        <p class="card-text">{{ $post['body'] }}</p>
        <a href="/posts" class="btn btn-primary">All Posts</a>
    </div>
    </div>

@endsection