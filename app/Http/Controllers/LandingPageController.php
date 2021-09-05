<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlumniJobResource;
use App\Http\Resources\EventResource;
use App\Http\Resources\LandingTopicResource;
use App\Http\Resources\TopicResource;
use App\Models\AlumniJob;
use App\Models\Event;
use App\Models\Topic;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function getUpComingEvents(): JsonResponse
    {
        $events  = Event::query()->where('endDate', '>', Carbon::today())->get();
        return response()->json(EventResource::collection($events));
    }

    public function getAvailableJobs(): JsonResponse
    {
        $jobs  = AlumniJob::query()->where('closingDate', '>', Carbon::now())->get();
        return response()->json(AlumniJobResource::collection($jobs));
    }

    public function getAllTopics(): JsonResponse
    {
        $topics = Topic::query()->orderBy('created_at', 'desc')->get();
        return response()->json(LandingTopicResource::collection($topics));
    }
}
