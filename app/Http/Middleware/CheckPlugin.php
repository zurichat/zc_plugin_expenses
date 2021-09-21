<?php

namespace App\Http\Middleware;

use Closure;

class CheckPlugin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $plugin_id = $request->header("Plugin-id");
        if($plugin_id){
            return $next($request);
        }else{
            return response(["status" => "error", "message" => "Please include Plugin-id in request header content"], 401)
                ->header('Content-Type', 'application/json');
        }
        
    }
}
