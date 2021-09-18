<?php

namespace App\Http\Middleware;

use App\Zuri\Expense;
use Closure;

class ExpenseListAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    private Expense $model;

    public function __construct(Expense $model)
    {
        $this->model = $model;
    }

    public function handle($request, Closure $next)
    {
        // $data["organization_id"] = $request->header("organization_id");
        // $data["plugin_id"] = $request->header("plugin_id");
        // $data["room_id"] = $request->header("room_id");
        
        // if($this->model->validate_all($data)){
        //     return $next($request);
        // }
        return $request->header("organization_id");
        // else return response($this->model->errors(), 422)
        //           ->header('Content-Type', 'application/json');
    }
}
