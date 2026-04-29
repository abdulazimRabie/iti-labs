<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <p>{{ __("You're logged in!") }}</p>
                    <p class="mt-2 font-semibold">Name: {{ auth()->user()->name }}</p>
                    <p class="text-sm text-gray-600">Email: {{ auth()->user()->email }}</p>

                    @can('is-admin')
                        <div class="mt-4">
                            <a href="{{ route('admin.dashboard') }}" class="text-blue-600 hover:underline">
                                Go to Admin Dashboard
                            </a>
                        </div>
                    @endcan
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
