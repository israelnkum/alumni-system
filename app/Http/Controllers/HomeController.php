<?php

namespace App\Http\Controllers;

use App\Models\AlumniJob;
use App\Models\Event;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function index(): Renderable
    {
        return view('home');
    }

    public function getInitialData(): JsonResponse
    {
        return response()->json([
            'jobs' => AlumniJob::all()->count(),
            'events' => Event::all()->count(),
            'users' => User::all()->count(),
            'topics' => Topic::all()->count(),
        ]);
    }
}
