@extends('layout')

@section('PageTitle', 'Create Post')
@section('PageHeadline', 'Create New Post')

@section('content')

<div class="max-w-2xl mx-auto bg-white border-2 border-black shadow-[4px_4px_0_0] p-6">

    <form action="/posts" method="POST" enctype="multipart/form-data" class="space-y-6">
        @csrf

        <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
                Title
            </label>

            <input 
                type="text" 
                id="title"
                name="title"
                value="{{ old('title') }}"
                class="mt-1 w-full border-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >

            @error('title')
                <p class="mt-1 text-sm text-red-600">
                    {{ $message }}
                </p>
            @enderror
        </div>

        <div>
            <label for="content" class="block text-sm font-medium text-gray-700">
                Content
            </label>

            <textarea 
                id="content"
                name="content"
                rows="5"
                class="mt-1 w-full border-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >{{ old('content') }}</textarea>

            @error('content')
                <p class="mt-1 text-sm text-red-600">
                    {{ $message }}
                </p>
            @enderror
        </div>

        <div>
            <label for="image" class="block text-sm font-medium text-gray-700">
                Image (.jpg, .png)
            </label>

            <input 
                type="file" 
                id="image"
                name="image"
                accept=".jpg,.jpeg,.png"
                class="mt-1 w-full border-2 border-black p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >

            @error('image')
                <p class="mt-1 text-sm text-red-600">
                    {{ $message }}
                </p>
            @enderror
        </div>

        <div class="flex justify-between items-center">
            
            <button 
                type="submit"
                class="bg-yellow-400 px-6 py-2 font-medium border-2 border-black hover:bg-yellow-300"
            >
                Create Post
            </button>

            <a href="/posts" class="text-sm text-gray-600 hover:underline">
                ← Back
            </a>

        </div>

    </form>

</div>

@endsection
