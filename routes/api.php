<?php

use App\Http\Controllers\AlumniJobController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
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

Route::group(['middleware' => ['auth:sanctum']], function () {

    // users api
    Route::prefix('users')->group(function (){
        Route::get('/auth',[UserController::class, 'getAuthUser']);
        Route::post('/change-password',[UserController::class, 'changePassword']);
    });

    // events api
    Route::apiResource('events', EventController::class);

    // jobs api
    Route::apiResource('jobs', AlumniJobController::class);

    // Forum api
    Route::prefix('forum')->group(function (){
        Route::apiResource('/topics', TopicController::class);
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
