<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('PageTitle')</title>

    {{-- @vite('resources/css/app.css') --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="bg-gray-100 text-gray-900">

    <header class="bg-white border-b border-gray-200">
        <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">

                <a href="/" class="text-xl font-bold">
                    📝 My App
                </a>

                <nav class="flex items-center gap-6 text-sm font-medium">

                    <a href="/posts"
                       class="text-gray-700 hover:text-black transition">
                        Posts
                    </a>

                    <a href="/posts/create"
                       class="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300 transition">
                        + Create
                    </a>

                </nav>
            </div>
        </div>
    </header>

    <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold">
            @yield('PageHeadline')
        </h1>
    </div>

    <main class="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8" id="app">
        @yield('content')
    </main>


    <div id="deleteModal" class="hidden fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="bg-white p-6 border-2 border-black shadow-lg max-w-sm w-full">

            <h2 class="text-lg font-bold">Confirm Delete</h2>
            <p class="mt-2 text-sm text-gray-600">
                Are you sure you want to delete this post?
            </p>

            <div class="mt-4 flex justify-end gap-2">
                <button onclick="closeModal()" class="px-4 py-2 border">
                    Cancel
                </button>

                <button id="confirmDeleteBtn"
                        class="bg-red-500 text-white px-4 py-2">
                    Delete
                </button>
            </div>
        </div>
    </div>

</body>
<script>
    let currentForm = null;

    function openModal(button) {
        currentForm = button.closest('form');
        document.getElementById('deleteModal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('deleteModal').classList.add('hidden');
    }

    document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
        if (currentForm) {
            currentForm.submit();
        }
    });
</script>
</html>