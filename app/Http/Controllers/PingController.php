<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PingController extends Controller
{
    public function index(){
        $result=[
            "status"=>200,
            "message" => "Successful",
            "data" => "UP"
        ];
        return json_encode($result);
    }
}
