<?php

namespace App\Http\Middleware;

use Closure;

class CheckOrganization
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
        $organization_id = $request->header("Organization-id");
        if($organization_id){
            return $next($request);
        }else{
            return response(["status" => "error", "message" => "Please include Organization-id in request header content"], 401)
                ->header('Content-Type', 'application/json');
        }
    }
}
