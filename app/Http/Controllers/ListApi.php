<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ListApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->validate([
            "token" => "required",
            // "plugin_id" => "required",
            // "user_id" => "required"
        ]);
        $response = Http::withHeaders([
            // 'Accept' => "application/json",
            "Authorization" => "Bearer",
            "Connection" => "Keep-alive",

            //"Cookie" =>"f6822af94e29ba112be310d3af45d5c7=MTYzMTUwNTk3NHxHd3dBR0RZeE0yVmpOell6TVRWbVlqSTBNalF5TmpGaU5qWTFPUT09fHYliwsAxcEo0kl0KZhJGyOPsvjohYWvuOa0SpnI0qAO"
        ])->get('https://api.zuri.chat/users');
        //return $request->token;
        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
