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
        $data["url"] = "https://api.zuri.chat/data/write";
        $data["plugin_id"] = "613ba9de41f5856617552f51";
        $data["organization_id"] = "6133c5a68006324323416896";
        $data["collection_name"] = "expenses_rooms_collection";
        $data["bulk_write"]=false;
        $data["object_id"]="";
        $data["filter"]=null;
        $data["payload"] = [
                "room_name" => "Accountants",
                "creator_id" => "613d3e65e4010959c8dc0c11",
                "visibility" => "public",
                "users_id" => ["613d3e65e4010959c8dc0c11"],
                "creation_date" => "date()",
                "plugin_id" => "613ba9de41f5856617552f51",
                "organisation_id" => "6133c5a68006324323416896"
        ];
        return $this->write("expenses_rooms_collection",$data);
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
    public function write($collection_name,$data=null,$url = "https://api.zuri.chat/data/write")
    {
        
        $response = Http::post($url = "https://api.zuri.chat/data/write",[
            "plugin_id" => $data["plugin_id"],
            "organization_id" => $data["organization_id"],
            "collection_name" => $collection_name,
            "bulk_write" => $data["bulk_write"],
            "object_id" => $data["object_id"],
            "filter" =>$data["filter"],
            "payload" =>$data["payload"]
            ]);
        return $response;
    }
}

// $response = Http::post("https://api.zuri.chat/data/write", [
//             "plugin_id" => "613ba9de41f5856617552f51",
//             "organization_id" => "6133c5a68006324323416896",
//             "collection_name" => "expenses_rooms_collection",
//             "bulk_write" => false,
//             "object_id" => "",
//             "filter" =>null,
//             "payload" =>[
//                 "room_name" => "Accountants",
//                 "creator_id" => "613d3e65e4010959c8dc0c11",
//                 "visibility" => "public",
//                 "users_id" => ["613d3e65e4010959c8dc0c11"],
//                 "creation_date" => "date()",
//                 "plugin_id" => "613ba9de41f5856617552f51",
//                 "organisation_id" => "6133c5a68006324323416896"
//             ]
//             ]);
//         return $response;