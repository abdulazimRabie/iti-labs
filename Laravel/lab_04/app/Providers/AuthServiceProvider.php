<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\User;
use App\Models\Post;
use App\Policies\PostPolicy;

class AuthServiceProvider extends ServiceProvider
{

    protected $policies = [
        Post::class => PostPolicy::class,
    ];


    public function boot(): void
    {
        Gate::define('is-admin', function (User $user) {
            return $user->role === 'admin' || $user->role === 'super-admin';
        });

        Gate::define('is-super-admin', function (User $user) {
            return $user->role === 'super-admin';
        });

        Gate::before(function (User $user) {
            if ($user->role === 'super-admin') {
                return true;
            }
        });
    }
}
