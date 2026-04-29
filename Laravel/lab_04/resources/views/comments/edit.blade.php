@extends('layout')

@section('PageTitle', 'Edit Comment')
@section('PageHeadline', 'Edit Comment')

@section('content')

<div class="border-2 border-black p-4 bg-white">

    <h2 class="font-bold mb-3">Post:</h2>

    <p class="mb-4">
        {{ $comment->post->title }}
    </p>

    <form action="/comments/{{ $comment->id }}" method="POST">
        @csrf
        @method('PUT')

        <textarea name="content"
                  class="w-full border p-2">{{ old('content', $comment->content) }}</textarea>

        @error('content')
            <p class="text-red-500 text-sm">{{ $message }}</p>
        @enderror
        <button class="mt-2 bg-blue-500 text-white px-4 py-2">
            Update
        </button>
    </form>

</div>

@endsection