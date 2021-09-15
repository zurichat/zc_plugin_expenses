<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repository\RoomRepository;
use Illuminate\Http\JsonResponse;

class RoomController extends Controller
{
	/**
     * @var RoomRepository
     */
    private $repository;
    /**
     * @var Request
     */
    private $request;

	public function __construct(RoomRepository $repository, Request $request)
    {
        $this->repository = $repository;
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
       
       // $rooms = $this->repository->index();
       // return response()->json(['status' => 'expenses retrieved successfully', 'data' => $rooms], 200);
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
            
            $room = $this->repository->store($request);
       		return response()->json(['status' => 'room created successfully', 'data' => $room], 201);
        }catch(\GuzzleHttp\Exception\RequestException  $e){
        	if ($e->hasResponse()) {
			    $exception = (string) $e->getResponse()->getBody();
			    return response()->json(['status' => 'error', 'message' => $e->getMessage() ], $e->getCode() );
			} else {
			    return new JsonResponse($e->getMessage(), 503);
			}
        }
        catch (\Exception $e) {
            return response()->json(['status' => 'error',  'message' => 'internal server error '.$e->getMessage()], 503 );
        }

    }

}
