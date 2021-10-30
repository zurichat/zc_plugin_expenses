<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Zuri\RoomMember;
use App\Zuri\Room;
use Illuminate\Http\JsonResponse;

class RoomMemberController extends Controller
{
	/**
     * @var RoomModel
     */
    private $model;
    /**
     * @var Request
     */
    private $request;
    private $plugin_id;
    private $organization_id;

    public function __construct(RoomMember $model, Request $request)
    {
        $this->model = $model;
        $this->request = $request;
        $this->plugin_id = $request->header('plugin-id');
        $this->organization_id = $request->header('organization-id');
    }


    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection|Response
     */
    public function index($room_id, Request $request)
    {
        $params["plugin_id"] = $this->plugin_id;
        $params["organization_id"] = $this->organization_id;
        $query = [
            "room_id" => $room_id
        ];

        $expense =  $this->model->all($params, $query);
        return $expense;

    }

    /**
     * Store resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection|Response
     */
    public function store(Request $request)
    {
       if($this->model->validate($request->all()) ){

            $data["plugin_id"] = $this->plugin_id;
            $data["organization_id"] = $this->organization_id;
            $data["collection_name"] = "expenses_list_collection";
            $data["bulk_write"]=false;
            $data["object_id"]="";
            $data["filter"] =json_decode("{}");
            $data["payload"] = [
                    "user_id" => $request->user_id,
                    "role" => $request->role,
                    "room_id" => $request->room_id,
                    "abilities" => $request->abilities,
                    "created_at" => time()
            ];
            try {
                $params["plugin_id"] = $this->plugin_id;
                $params["organization_id"] = $this->organization_id;
                $query = [
                    "_id" => $request->room_id
                ];

                $room = Room::find($params, $query);
                if($room['data']){
                    $member = $this->model->create($data);
                    return response()->json([
                        'status' => 'success',
                        'message' => "user added successfully",
                        "data" => $member['data']
                    ], 201); 
                }else{
                    return response()->json(['status' => 'error', 'message' => "room not found"], 201); 
                }
            } catch (Exception $e) {
                return $e;
            }
        }else{
            $errors = $this->model->errors();
            return response()->json(['status' => 'error', 'message' => $errors], 422); 
       }
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($room_id, $user_id, Request $request)
    {
       
        $params["plugin_id"] = $this->plugin_id;
        $params["organization_id"] = $this->organization_id;
        $query = [
             "room_id" => $room_id,
             "user_id" => $user_id
        ];

        $room = $this->model->find($params, $query);
        return $room;
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id, Request $request)
    {   
        $params["plugin_id"] = $this->plugin_id;
        $params["organization_id"] = $this->organization_id;
        $params["bulk_delete"]= $request->filter ? true  : false;
        $params["object_id"]= $request->object_id ? $request->object_id  : "";
        $params["filter"] = $request->filter ? $request->filter  : json_decode("{}");

        $room = $this->model->delete($params);
        return $room;
    }

}
