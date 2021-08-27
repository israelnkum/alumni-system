<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(EventResource::collection(Event::all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {

        // check if name is already taken
        $checkEmail = Event::query()->where('name',$request->email)->count();
        if ($checkEmail > 0){
            return response('Event with the same already exist', 400);
        }

        DB::beginTransaction();
        try {
            $date = explode(',', $request->startDateAndTime);
            $request['userId'] = Auth::user()->id;
            $request['startDate'] = $date[0];
            $request['endDate'] = $date[1];

            // add event to db
            $event = Event::create($request->all());

            DB::commit();
            return response(new EventResource($event));
        }catch (\Exception $exception){
            DB::rollBack();
            return response($exception,400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, int $id): Response
    {

        DB::beginTransaction();
        try {
            $date = explode(',', $request->startDateAndTime);
            $request['startDate'] = $date[0];
            $request['endDate'] = $date[1];

            // update to db
            $event = Event::find($id);
            $event->update($request->all());

            DB::commit();
            return response(new EventResource($event));
        }catch (\Exception $exception){
            DB::rollBack();
            return response($exception,400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy(int $id): Response
    {
        DB::beginTransaction();
        try {
            Event::query()->find($id)->delete();
            DB::commit();
            return \response('Student Deleted');
        }catch (\Exception $exception){
            DB::rollBack();
            return response('Something went wrong',422);
        }
    }
}
