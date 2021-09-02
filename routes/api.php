<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


// routes that an admin user will have to pass through
Route::group(['middleware' => 'Admin', 'prefix'=>'v1'], function () {

    Route::get('admin', 'AdminController@index');
    //Route::post('admin', 'AdminController@save');
    //Route::delete('admin', 'AdminController@delete');
    //Route::update('admin', 'AdminController@update');
     
});