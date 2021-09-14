<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Organisation;

class OrganisationRoomsController extends Controller
{
    public function store(Organisation $organisation){
        #add a room to the given organisation validating in-situ
        request()->validate([
             'name' => 'required'
        ]);
        $organisation->rooms()->create([
            'user_id' => request()->user()->id,
            'name' => request('name')
        ]);
        
         
        return response()->json([
            'status' => 'success',
            'data' => $organisation
        ], 200);
        
       }
       public function destroy_organisation($id)
       {
           $organisation = Organisation::destroy($id);
   
           return response()->json([
               'storage' => 'deleted',
               'data' => null
           ]);
       }
}
