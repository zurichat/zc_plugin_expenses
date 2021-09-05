<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function show(){
        $about = [
            'plugin_name' => 'zuri expenses',
            'version' => '1.0',
            'team_name' => 'team_grange',
            'information' => 'This describes information about the expenses',
        ];

        return response()->json($about, 200);
    }
}
