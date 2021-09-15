<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Zuri\Room;
use Illuminate\Http\JsonResponse;

class RoomController extends Controller
{
	/**
     * @var RoomRepository
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
    public function index()
    {
       
    }

    /**
     * Store resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection|Response
     */
    public function store(Request $request)
    {
       try {
            
             $room = $this->model->create($request);
       		return response()->json(['status' => 'room created successfully', 'data' => $room], 201);
        }catch (\Exception $e) {
            return response()->json(['status' => 'error',  'message' => 'internal server error '.$e->getMessage()], 503 );
        }

    }

}
