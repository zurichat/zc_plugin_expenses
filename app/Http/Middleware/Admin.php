<?php

namespace App\Http\Middleware;

use Closure;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    // @Aduramimo issue #110
    public function handle($request, Closure $next)
    {
        if (\Auth::user() &&  \Auth::user()->admin == 1) {
            return $next($request);
     }
        return redirect('/');
        // @Aduramimo issue #110
    }
}
