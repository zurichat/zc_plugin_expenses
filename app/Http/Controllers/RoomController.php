<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Zuri\Room;
use Illuminate\Http\JsonResponse;

class RoomController extends Controller
{
	/**
     * @var RoomModel
     */
    private $model;
    /**
     * @var Request
     */
    private $request;

    public function __construct(Room $model, Request $request)
    {
        $this->model = $model;
        $this->request = $request;
    }


    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection|Response
     */
    public function index(Request $request)
    {

       if( $this->model->validateShow($request->all() ) ) {
            $params["plugin_id"] = $request->plugin_id;
            $params["organization_id"] = $request->organization_id;
            $query = [];

            $expense =  $this->model->all($params, $query);
            return $expense;
        }else{
            $errors = $this->model->errors();
            return response()->json(['status' => 'error', 'message' => $errors], 422); 
       }

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

            $members = $request->members ? $request->members : [];
            $creator = ["user_id" => $request->creator_id, "role" => "creator"];
            // add creator as room member
            array_push($members, $creator);
            
            $data["plugin_id"] = $request->plugin_id;
            $data["organization_id"] = $request->organization_id;
            $data["collection_name"] = "expenses_list_collection";
            $data["bulk_write"]=false;
            $data["object_id"]="";
            $data["filter"] =json_decode("{}");
            $data["payload"] = [
                    "name" => $request->name,
                    "description" => $request->description,
                    "topic" =>$request->topic,
                    "members" => $members,
                    "plugin_id" => $request->plugin_id,
                    "organization_id" => $request->organization_id,
                    "creator_id" => $request->author_id,
                    "status" => "open",
                    "visibility" => $request->visibility,
                    "created_at" => time()
            ];

            try {
                $room = $this->model->create($data);
                return $room;
            } catch (Exception $e) {
                return $e;
            }
        }else{
            $errors = $this->model->errors();
            return response()->json(['status' => 'error', 'message' => $errors], 422); 
       }
    }

}
