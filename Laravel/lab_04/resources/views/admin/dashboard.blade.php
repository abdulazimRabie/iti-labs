@extends('layout')

@section('PageTitle', 'Admin Dashboard')
@section('PageHeadline', 'Admin Dashboard')

@section('content')
<div class="max-w-4xl mx-auto bg-white border-2 border-black shadow-[4px_4px_0_0] p-6">
    <p class="text-lg">Welcome, <strong>{{ auth()->user()->name }}</strong>!</p>
    <p class="mt-2">Role: <span class="font-bold uppercase">{{ auth()->user()->role }}</span></p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href="/posts" class="block border-2 border-black p-4 bg-yellow-100 hover:bg-yellow-200">
            Manage Posts
        </a>
        <a href="/posts/create" class="block border-2 border-black p-4 bg-green-100 hover:bg-green-200">
            Create Post
        </a>
    </div>
</div>
@endsection
