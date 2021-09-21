<?php

use App\Http\Controllers\SidebarAPI;
use App\Http\Controllers\ExpenseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;

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
    Route::post('/expense/add', [ExpenseController::class, 'add_expense']);
    Route::get('/expense/show', [ExpenseController::class, 'show_expense']);
    Route::post('/expense/update', [ExpenseController::class, 'update_expense']);
    Route::delete('/expense/delete', [ExpenseController::class, 'delete_expense']);
    });
