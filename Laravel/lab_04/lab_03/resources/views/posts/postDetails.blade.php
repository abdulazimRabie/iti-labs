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

         <a href="/profile/{{ $post->user->id }}"
            class="font-bold text-blue-600 hover:underline">
            {{ $post->user->name }}
        </a>
    </div>

    <div class="border-t-2 border-black p-4 flex gap-3">

        @if (auth()->id() == $post->user_id)
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
        @endif

        <a href="/posts"
           class="ml-auto text-sm text-gray-600 hover:underline">
            ← Back to posts
        </a>

    </div>

    {{-- Comments --}}

    <div class="border-t-2 border-black p-4">

        <h3 class="font-bold mb-3">Comments</h3>

        @foreach ($post->comments as $comment)

            <div class="border p-3 mb-2">

                {{-- <a href="/profile/{{$comment->user->id}}"><strong>{{ $comment->user->name }}</strong></a> --}}
                
                <a href="/profile/{{ $comment->user->id }}"
                    class="font-bold text-blue-600 hover:underline">
                        {{ $comment->user->name }}
                </a>
                <p class="mt-1">{{ $comment->content }}</p>

                @if(auth()->id() === $comment->user_id)

                    <div class="mt-2 flex gap-2">

                        <!-- Edit -->
                        <a href="/comments/{{ $comment->id }}/edit"
                        class="bg-blue-500 text-white px-3 py-1 text-sm">
                            Update
                        </a>

                        <!-- Delete -->
                        <form action="/comments/{{ $comment->id }}" method="POST">
                            @csrf
                            @method('DELETE')

                            <button class="bg-red-500 text-white px-3 py-1 text-sm">
                                Delete
                            </button>
                        </form>

                    </div>

                @endif

            </div>

        @endforeach

    </div>



    {{-- Add user comment --}}
    <div class="border-t-2 border-black p-4">

        <form action="/comments" method="POST">
            @csrf

            <input type="hidden" name="post_id" value="{{ $post->id }}">

            <textarea name="content"
                    class="w-full border p-2"
                    placeholder="Write a comment">{{ old('content') }}</textarea>
                
            @error('content')
                <p class="text-red-500 text-sm">{{ $message }}</p>
            @enderror

            <button class="mt-2 bg-green-600 text-white px-4 py-2">
                Add Comment
            </button>
        </form>

    </div>

</article>

@endsection