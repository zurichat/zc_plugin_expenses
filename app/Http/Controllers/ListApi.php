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
        return $this->read("expenses_list_collection",$data,$query)->json();
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
        $data["plugin_id"] = $request->plugin_id;
        $data["organization_id"] = $request->organization_id;
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
                "updated_at" => time(),
                "created_at" => time()
        ];
        return $this->write("POST","expenses_list_collection",$data);
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
        return $this->read("expenses_list_collection",$data,$query)->json();
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
            "status" =>"required"
        ]);
        $data["plugin_id"] = $request->plugin_id;
        $data["organization_id"] = $request->organization_id;
        $data["payload"]["status"] =$request->status;
        $data["payload"]["comment"]=$request->comment??"";
        $data["bulk_write"]=false;
        $data["object_id"]=$id;
        $data["filter"] =json_decode("{}");
        $data["updated_at"] = time();
        $query = [
            "room_id" => $request->room_id,
            "_id" =>$id
        ];
        return $this->write("PUT","expenses_list_collection",$data)->json();
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
    public function write($method,$collection_name,$data=null,$url = "https://api.zuri.chat/data/write")
    {
        $prepared_data = [
            "plugin_id" => $data["plugin_id"],
            "organization_id" => $data["organization_id"],
            "collection_name" => $collection_name,
            "bulk_write" => $data["bulk_write"]??"",
            "object_id" => $data["object_id"],
            "filter" =>$data["filter"],
            "payload" =>$data["payload"]
        ];
        if($method == "POST"){
            $response = Http::post($url = "https://api.zuri.chat/data/write",$prepared_data);
        }
        else{
           $response = Http::put($url = "https://api.zuri.chat/data/write",$prepared_data); 
        }
        return $response;
    }

    
     /**
     * Reads Data from zuricore api.
     *
     * @return \Illuminate\Http\Response
     */
    public function read($collection_name, $data = null, $query = null,$url = "https://api.zuri.chat/data/read")
    {
        
        $response = Http::get($url = "$url/{$data['plugin_id']}/{$collection_name}/{$data['organization_id']}",$query);
        $result = $response;
        return $result;
    }
}
