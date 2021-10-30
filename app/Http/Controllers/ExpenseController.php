<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Zuri\Expense;
use Illuminate\Support\Facades\Validator;


class ExpenseController extends Controller
{
    private $model;
    private $request;
    private $plugin_id;
    private $organization_id;
    private $room_id;

    public function __construct(Expense $model, Request $request)
    {
        $this->model = $model;
        // $this->request = $request;
        $this->plugin_id = $request->header('Plugin-id');
        $this->organization_id = $request->header('Organization-id');
        $this->room_id = $request->header('Room-id');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $params["plugin_id"] = $this->plugin_id;
        $params["organization_id"] = $this->organization_id;
        $query = [
            "room_id" => $this->room_id
        ];

        $expense =  $this->model->all($params, $query);
        return response()->json(['status' =>'error', 'message' => 'expenses retrieved successfully', 'data' => $expense], 200);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       if($this->model->validate($request->all()) ){
            $total = 0;
            if($request->items){
                foreach ($request->items as $item ) {
                   $total+=$item["unit_price"] * $item["quantity"];
                }  
            }
            
            $data["plugin_id"] = $this->plugin_id;
            $data["organization_id"] = $this->organization_id;
            $data["collection_name"] = "expenses_list_collection";
            $data["bulk_write"]=false;
            $data["object_id"]="";
            $data["filter"] =json_decode("{}");
            $data["payload"] = [
                    "title" => $request->title,
                    "description" => $request->description,
                    "total" =>$total,
                    "items" => $request->items,
                    "status" => "pending",
                    "room_id" => $this->room_id,
                    "author_id" => $request->author_id,
                    "author_name" =>$request->author_name,
                    "admin_comment" =>"",
                    "created_at" => time(),
                    "updated_at" => time()
            ];
            try {
                $expense = $this->model->create($data);
                return $expense;
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
    public function show($id, Request $request)
    {
      
        $params["plugin_id"] = $this->plugin_id;
        $params["organization_id"] = $this->organization_id;
        $query = [
            "room_id" => $this->room_id,
            "_id" =>$id
        ];

            $expense = $this->model->find($params, $query);
            return response()->json(['status' => 'expense retrieved successfully', 'data' => $expense], 200); 
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
       
        $query = [
            "room_id" => $this->room_id,
        ];

        $params["plugin_id"] = $this->plugin_id;
        $params["organization_id"] = $this->organization_id;
        $query = $request->filter;

        $expense = $this->model->find($params, $query);
        return response()->json(['status' => 'expense retrieved successfully', 'data' => $expense], 200); 
        

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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

        $v = Validator::make($request->all(), ["status" => "required"]);
        if($v->passes()){
            $data["plugin_id"] = $this->plugin_id;
            $data["organization_id"] = $this->organization_id;
            $data["payload"]["status"] =$request->status;
            $data["payload"]["admin_comment"]=$request->admin_comment??"";
            $data["bulk_write"]=false;
            $data["object_id"]=$id;
            $data["filter"] =json_decode("{}");
            $data["payload"]["updated_at"] = time();
            // return $data;
            try {
                $expense = $this->model->save($data);
                return $expense;
            } catch (Exception $e) {
                return $e;
            }
        }else{
            $errors = $v->errors()->toArray();
            return response()->json(['status' => 'error', 'message' => $errors], 422); 
       }

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

        $expense = $this->model->delete($params);
        return response()->json(['status' => 'expense list deleted successfully', 'data' => $expense], 201); 
        
    }
}
