<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AboutController;


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

// Route::get('/', function () {
//     return view('welcome');
// });

 Route::view('/expenses', 'app');
 Route::view('/', 'app');
 Route::view('/local', 'local');

// Route::get('/dbtable', function () {
//     return view('table');
// });

Auth::routes();


Route::get('/home', 'HomeController@index')->name('home');

Route::get('/centrifugo', function(){
    return view("centrifugo");
});


//@kelanialiyu issue #200 start
// Route::resource("list","ExpenseList");
//@kelanialiyu 1ssue #200 end for linking list controller 

// Route::get("external", "External@index");

