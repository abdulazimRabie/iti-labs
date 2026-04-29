<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

                    <x-primary-button class="ms-3">
                        {{ __('Log in') }}
                    </x-primary-button>
                </div>
            </form>

            <div class="mt-6 text-center">
                <a href="{{ route('github.login') }}"
                   class="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-900 border-2 border-black hover:bg-gray-800">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017 0 14.442 2.865 18.197 6.839 19.49c.55.1.748-.238.748-.53 0-.263-.01-1.13-.015-2.05-2.622.57-3.176-1.125-3.176-1.125-.428-1.09-1.045-1.38-1.045-1.38-.855-.584.065-.572.065-.572.945.067 1.442.97 1.442.97.84 1.44 2.205 1.025 2.743.784.085-.61.328-1.025.596-1.26-2.09-.238-4.286-1.045-4.286-4.653 0-1.028.367-1.868.97-2.526-.097-.238-.42-1.195.092-2.49 0 0 .79-.253 2.59.967A9.052 9.052 0 0110 4.844c.81.004 1.626.11 2.39.32 1.8-1.22 2.588-.967 2.588-.967.513 1.295.19 2.252.093 2.49.604.658.968 1.498.968 2.526 0 3.616-2.2 4.413-4.3 4.647.338.29.64.865.64 1.743 0 1.26-.012 2.275-.012 2.585 0 .295.198.634.755.527C17.14 18.19 20 14.438 20 10.017 20 4.484 15.522 0 10 0z"/>
                    </svg>
                    Login with GitHub
                </a>
            </div>
        </div>
    </div>
</x-guest-layout>
