<?php

namespace App\Http\Controllers;

use App\Expense;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $expense = Expense::latest()->paginate(10);

        if(!$expense){
            return response()->json([
                'status' => 'no data',
                'data' => null
            ]);
        }

        return response()->json([
            'status' => 'success',
            'data' => $expense
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add_expense(Request $request)
    {
       $validated = $request->validate([
            'id' => "required",
            'user_id' => "required",
                'title' => "required",
                'item' => "required",                  
                  
                  'unit_price' =>  "required",
                  'quantity' =>  "required",
                'total_price' =>  "required",
                'description' =>  "required",
                'status' =>  "required",
                // 'admin_id' => "required",
                // 'date' =>  Carbon::now(),
                'room_id' => "required",
                // 'plugin_id' => "",
                'organisation_id' => "required"
                
        ]);

        $id = $request->input('id');
        $user_id = $request->input('user_id');
        $title = $request->input('title');
        $item = $request->input('item');
        
        $unit_price = $request->input('unit_price');
        $quantity = $request->input('quantity');
        $total_price = $request->input('total_price');
        $description = $request->input('description');
        $status = $request->input('status');
        // $admin_id = $request->input('admin_id');
        $room_id = $request->input('room_id');
        $organisation_id = $request->input('organisation_id');
        $created_at = $request->input('created_at');
        $updated_at = $request->input('updated_at');
        

         Expense::create([
           'id' => $id,
           'user_id' => $user_id,
           'title' => $title,
           'item' => $item,
           
           'unit_price' => $unit_price,
           'quantity' => $quantity,
           'total_price' => $total_price,
           'description' => $description,
           'status' => $status,
        //    'admin_id' => $admin_id,
           'room_id' => $room_id,
           'organisation_id' => $organisation_id,
           'created_at' => Carbon::now(),
           'updated_at' => Carbon::now()
           
       ]);
        

        $data = [
            'status' => 'created successfully',
            'create' => ['method' => 'POST']
        ];

        $response = [
            'messsage' => 'Successfully created',
            'data' => $data
        ];

        return response()->json($response, 200);
        
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show_expense(Expense $expense)
    {
        $expense = Expense::all();

        if(!$expense){
            return response()->json([
                'status' => 'not found',
                'data' => null
            ]);
        }

        return response()->json([
            'status' => 'success',
            'data' => $expense
        ], 200);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update_expense(Request $request, $id)
    {
        $expense = Expense::findorFail($id)
        ->update($request->all());

    return response()->json([
        'status' => 'result',
        'data' => $expense
    ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy_expense($id)
    {
        $expense = Expense ::destroy($id);

        return response()->json([
            'status' => 'deleted',
            'data' => null
        ], 200);
    }
}
