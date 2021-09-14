<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;

class RoomUsersController extends Controller
{
    public function store(Room $room){
        #add a user to the given room validating in-situ
        request()->validate([
             'name' => 'required'
        ]);
        $room->users()->create([
            'user_id' => request()->user()->id,
            'name' => request('name')
        ]);
         
        return response()->json([
            'status' => 'success',
            'data' => $room
        ], 200);
        
       }
       public function destroy_room($id)
       {
           $room = Room::destroy($id);
   
           return response()->json([
               'storage' => 'deleted',
               'data' => null
           ]);
       }
}
