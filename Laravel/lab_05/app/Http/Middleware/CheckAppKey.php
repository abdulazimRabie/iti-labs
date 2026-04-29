<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAppKey
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $key = $request->header('X-APP-KEY');

        if ($key !== 'my-secret-key') {
            return response()->json([
                'message' => 'Invalid or missing APP KEY'
            ], 403);
        }

        return $next($request);
    }
}
