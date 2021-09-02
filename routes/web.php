<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// @Aduramimo issue #129
// routes that an admin user will have to pass through
Route::group(['middleware' => 'Admin'], function () {

    Route::get('admin', 'AdminController@index');
    //Route::post('admin', 'AdminController@save');
    //Route::delete('admin', 'AdminController@delete');
    //Route::update('admin', 'AdminController@update');
     
});
// @Aduramimo issue #129