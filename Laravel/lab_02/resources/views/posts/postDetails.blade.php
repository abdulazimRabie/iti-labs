@extends('layout')

@section('PageTitle', 'Post Details')
@section('PageHeadline', 'Post Details')

@section('content')

<article class="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0]">

    <div class="bg-yellow-300 p-3">
        <div class="flex items-center justify-between">
            <strong class="text-xs font-bold uppercase">Post Details</strong>

            <div class="flex gap-1">
                <div class="size-3 border-2 border-black bg-white"></div>
                <div class="size-3 border-2 border-black bg-white"></div>
            </div>
        </div>
    </div>

    <div class="border-t-2 border-black p-4 sm:p-6">
        <h3 class="text-lg font-semibold text-black">
            {{ $post->title }}
        </h3>

        <p class="mt-2 text-sm text-gray-700">
            {{ $post->content }}
        </p>

        <p class="mt-4 text-xs text-gray-500">
            Created at: {{ $post->created_at->format('M d, Y') }}
        </p>
    </div>

    <div class="border-t-2 border-black p-4 flex gap-3">

        <a href="/posts/edit/{{ $post->id }}"
           class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-400">
            Edit
        </a>

        <form action="/posts/delete/{{ $post->id }}" method="POST" class="delete-form">
            @csrf
            @method('DELETE')

            <button type="button"
                    onclick="openModal(this)"
                    class="bg-red-500 text-white px-4 py-2">
                Delete
            </button>
        </form>

        <a href="/posts"
           class="ml-auto text-sm text-gray-600 hover:underline">
            ← Back to posts
        </a>

    </div>

</article>

@endsection