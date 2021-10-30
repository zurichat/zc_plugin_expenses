<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PingController extends Controller
{
   public function ping() {
       return response()->json(['message' => 'Server is live!'], 200);
   }
}
