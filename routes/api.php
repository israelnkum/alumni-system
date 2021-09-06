<?php

use App\Http\Controllers\AlumniJobController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LandingPageController;
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

    Route::apiResource('/users',UserController::class);
    Route::prefix('user')->group(function (){
        Route::get('/auth',[UserController::class, 'getAuthUser']);
        Route::post('/import',[UserController::class, 'userImport']);
        Route::post('/change-password',[UserController::class, 'changePassword']);
    });

    Route::get('/initial-data/',[HomeController::class, 'getInitialData']);
    // events api
    Route::apiResource('events', EventController::class);

    // jobs api
    Route::apiResource('jobs', AlumniJobController::class);

    // Forum api
    Route::prefix('forum')->group(function (){
        Route::apiResource('/topics', TopicController::class);

        Route::prefix('/comments')->group(function (){
            Route::post('/add', [TopicController::class, 'addComment']);
        });
    });
});

Route::prefix('landing')->group(function (){
    Route::get('/events',[LandingPageController::class, 'getUpComingEvents']);
    Route::get('/jobs',[LandingPageController::class, 'getAvailableJobs']);
    Route::get('/topics',[LandingPageController::class, 'getAllTopics']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
