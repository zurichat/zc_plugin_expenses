<?php

namespace App\Http\Middleware;

use Closure;

class CheckRoom
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
        $room_id = $request->header("Room-id");
        if($room_id){
            return $next($request);
        }else{
            return response(["status" => "error", "message" => "Please include Room-id in request header content"], 401)
                ->header('Content-Type', 'application/json');
        }
    }
}
