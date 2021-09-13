<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Collection;

class ListApi extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $this->write();
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

    /**
     * Writes Data to an zuricore api.
     *
     * @return \Illuminate\Http\Response
     */
    public function write($data=null, $method=null, $url=null,$filter=null)
    {
        
        //$response = Http::post("https://api.zuri.chat/data/write", [
         $response = [   "plugin_id" => "613ba9de41f5856617552f51",
            "organization_id" => "6133c5a68006324323416896",
            "collection_name" => "expenses_rooms_collection",
            "bulk_write" => false,
            "object_id" => "",
            "filter" =>null,
            "payload" =>[
                "room_name" => "Accountants",
                "creator_id" => "613d3e65e4010959c8dc0c11",
                "visibility" => "public",
                "users_id" => ["613d3e65e4010959c8dc0c11"],
                "creation_date" => "date()",
                "plugin_id" => "613ba9de41f5856617552f51",
                "organisation_id" => "6133c5a68006324323416896"
            ]
            ];//);
        return $response;
    }
}
