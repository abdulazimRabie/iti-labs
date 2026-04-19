@extends('layout')

@section('PageTitle')
    All Posts
@endsection

@section('PageHeadline')
    All Posts
@endsection

@section('content')
    <div class="container mx-auto">
        <h1>Vue component</h1>
        <Test></Test>

        <div class="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @foreach ($posts as $post)
            <div>
                <a href="/posts/{{ $post->id }}"
                class="block border-2 border-black bg-white p-4 shadow-[4px_4px_0_0] hover:bg-yellow-100 focus:ring-2 focus:ring-yellow-300 focus:outline-0 sm:p-6">

                    <span class="inline-flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="size-4">
                            <path fill-rule="evenodd"
                                d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                                clip-rule="evenodd"></path>
                        </svg>

                        <time class="text-xs font-semibold uppercase">
                            {{ $post->created_at->format('M d, Y') }}
                        </time>
                    </span>

                    <h3 class="mt-1 text-xl font-semibold">
                        {{ $post->title }}
                    </h3>

                    <p class="mt-2 line-clamp-2 text-gray-700">
                        {{ $post->content }}
                    </p>
                                        
                </a>
                
                <div>
                    <view-ajax :id="{{ $post->id }}"></view-ajax>
                </div>
            </div>
            @endforeach
        </div>

        <div class="mt-6 flex flex-col-reverse">
            {{-- @dump($posts->links()) --}}

            {{ $posts->links() }}
        </div>
        
        {{-- <div>        
            <form action="/posts/restore" method="POST" class="mb-4">
                @csrf
                @method('PUT')
        
                <button class="bg-green-600 text-white px-4 py-2 rounded">
                    Restore All Deleted Posts
                </button>
            </form>
        </div> --}}
        
    </div>
    
@endsection