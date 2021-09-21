<?php

use App\Http\Controllers\SidebarAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ListApi;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\RoomMemberController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'v1'], function(){
    Route::get('/sidebarlist', [SidebarAPI::class, 'sidebar']);
    });

// Expense List endpoints 
Route::prefix('v1')->group(function () {
    Route::resource("list", "ListApi");
});


// Auth Endpoints

// Expense List Routes
Route::group(['middleware' => ['plugin_id', 'organization_id','room_id'], 'prefix' => 'v1'],function () {
	Route::post('/expenses/search', [ExpenseController::class, 'search'] );
    Route::resource("expenses", "ExpenseController");
});



// Room Members  Endpoints
Route::group(['middleware' => ['plugin_id', 'organization_id'], 'prefix' => 'v1'], function(){
	Route::get('/rooms/{room_id}/members', [RoomMemberController::class, 'index'] );
	Route::get('/rooms/{room_id}/members/{user_id}', [RoomMemberController::class, 'show'] );
	Route::delete('/rooms/{room_id}/members/{user_id}', [RoomMemberController::class, 'destroy'] );
	Route::post('/rooms/{room_id}/members', [RoomMemberController::class, 'store'] );
});

// Room  Endpoints
Route::group(['middleware' => ['plugin_id', 'organization_id'], 'prefix' => 'v1'], function(){
    Route::resource("rooms", "RoomController");
});




// Organization Endpoints






