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
        $request->validate([
            "plugin_id" => "required",
            "organization_id" => "required",
            "room_id" => "required"
        ]);

        $data["plugin_id"] = $request->plugin_id;
        $data["organization_id"] = $request->organization_id;
        $query = ["room_id" => $request->room_id];
        return $this->read("expenses_list_collection",$data,$query);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "plugin_id" => "required",
            "organization_id" => "required",
            "room_id" => "required",
            "author_id"=>"required",
            "title" =>"required"
        ]);
        $total = 0;
        foreach ($request->items as $item ) {
           $total+=$item["unit_price"] * $item["quantity"];
        }
        // return $total;
        $data["url"] = "https://api.zuri.chat/data/write";
        $data["plugin_id"] = $request->plugin_id;
        $data["organization_id"] = $request->organization_id;
        $data["collection_name"] = "expenses_list_collection";
        $data["bulk_write"]=false;
        $data["object_id"]="";
        $data["filter"] =json_decode("{}");
        $data["payload"] = [
                "room_id" => $request->room_id,
                "author_id" => $request->author_id,
                "tittle" => $request->title,
                "items" => $request->items,
                "total" =>$total,
                "description" => $request->description,
                "status" => "pending",
                "admin_comment" =>"",
                "creation_date" => time()
        ];
        // return $data;
        return $this->write("expenses_list_collection",$data);
     }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id,Request $request)
    {
        $request->validate([
            "plugin_id" => "required",
            "organization_id" => "required",
            "room_id" => "required"
        ]);

        $data["plugin_id"] = $request->plugin_id;
        $data["organization_id"] = $request->organization_id;
        $query = [
            "room_id" => $request->room_id,
            "_id" =>$id
        ];
        return $this->read("expenses_list_collection",$data,$query);
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
        $request->validate([
            "plugin_id" => "required",
            "organization_id" => "required",
            "room_id" => "required",
            "list_status" =>"required"
        ]);

        $data["plugin_id"] = $request->plugin_id;
        $data["organization_id"] = $request->organization_id;
        $query = [
            "room_id" => $request->room_id,
            "_id" =>$id
        ];
        return $this->read("expenses_list_collection",$data,$query);
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
     /**
     * Writes Data to an zuricore api.
     *
     * @return \Illuminate\Http\Response
     */
    public function read($collection_name, $data = null, $query = null,$url = "https://api.zuri.chat/data/read")
    {
        
        $response = Http::get($url = "$url/{$data['plugin_id']}/{$collection_name}/{$data['organization_id']}",$query);
        return $response->json();
        // $message = ($response->successful())?"Expense list created successfully":$response->message();
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