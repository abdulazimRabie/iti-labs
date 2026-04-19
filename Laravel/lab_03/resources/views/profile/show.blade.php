@extends('layout')

@section('PageTitle', 'User Profile')
@section('PageHeadline', 'User Profile')

@section('content')

<div class="border-2 border-black bg-white p-6">

    <!-- User Info -->
    <div class="mb-6">
        <h2 class="text-xl font-bold">
            {{ $profile->name }}
        </h2>

        <p class="text-sm text-gray-500">
            {{ $profile->email }}
        </p>
    </div>

    <!-- User Posts -->
    <div class="border-t-2 border-black pt-4">

        <h3 class="font-bold mb-4">Posts by this user</h3>

        @if($profile->posts->count() > 0)

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                @foreach ($profile->posts as $post)

                    <a href="/posts/{{ $post->id }}"
                       class="block border p-3 hover:bg-gray-100">

                        <h4 class="font-semibold">
                            {{ $post->title }}
                        </h4>

                        <p class="text-sm text-gray-600 mt-1">
                            {{ Str::limit($post->content, 100) }}
                        </p>

                        <p class="text-xs text-gray-400 mt-2">
                            {{ $post->created_at->format('M d, Y') }}
                        </p>

                    </a>

                @endforeach

            </div>

        @else

            <p class="text-gray-500">This user has no posts yet.</p>

        @endif

    </div>

</div>

@endsection