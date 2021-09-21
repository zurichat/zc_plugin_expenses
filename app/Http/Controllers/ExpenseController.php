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
        //
        $expense = Expense::_all();
        return response()->json(['status' => 'expenses retrieved successfully', 'data' => $expense], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        try {
            $expense = Expense::_create($data);
            return response()->json(['status' => 'created successfully', 'data' => $expense], 201); 
        } catch (Exception $e) {
            return $e;
        }
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
        $expense = Expense::_find($id);
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
