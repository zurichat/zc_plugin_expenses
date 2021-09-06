<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SidebarController extends Controller
{
    //@Tshux issue #53
    public static function sidebar(){
        try{
            $list = [
                'firstItem' => 'Insight',
                'secondItem' => 'Threads',
                'thirdItem' => 'All DMs',
                'fourthItem' => 'Drafts',
                'fifthItem' => 'Files',
                'sixthItem' => 'Integrate',
                'seventhItem' => 'Expenses with dropdown of New Expense and Upload receipt',
                'eightItem' => 'Channels with a plus button and subsequent channels i.e #announcement, #games, #Designers, #developers ' ,
                'ninthItem' => 'Direct Messages with a plus button to add new DM conversations',
                ];
                return response()->json([
                 'status' => 'success',
                 'message' => 'Successfully displayed static sidebar list',
                 'list' => $list
                ], 200);
            }catch (\Throwable $err){
                throw $err;
                //@Tshux issue #53
            }

        }
}
