<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function showPluginInfo() {
        $pluginInfo = [
            'name' => 'Expenses Plugin',
            'version' => '1.0',
            'description' => [
                'zuri.chat Plugin',
                'A plugin to track expenses'
            ],
            'scaffold_structure' => 'Monolith',
            'team' => 'HNG-8.0/Expenses Team',
            'ping_url' => 'https://expenses.zuri.chat/api/ping',
            // 'html_url' => 'https:',
            // 'sidebar_url' => '',
        ];
        return response()->json([
            'status' => 'success',
            'type' => 'Plugin Information',
            'plugin_info' => $pluginInfo
        ], 200);
    }
}
