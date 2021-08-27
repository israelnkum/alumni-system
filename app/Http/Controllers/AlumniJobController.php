<?php

namespace App\Http\Controllers;

use App\Http\Resources\AlumniJobResource;
use App\Models\AlumniJob;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Queue\Jobs\Job;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AlumniJobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(AlumniJobResource::collection(AlumniJob::all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request): Response
    {
        // check if name is already taken
        $checkJobTitle = AlumniJob::query()->where('title',$request->title)
            ->where('location', $request->location)->count();

        if ($checkJobTitle > 0){
            return response('A Job with the same already exist', 400);
        }

        DB::beginTransaction();
        try {

            $request['userId'] = Auth::user()->id;

            // add job to db
            $event = AlumniJob::create($request->all());

            DB::commit();
            return response(new AlumniJobResource($event));
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
            // find job
            $job = AlumniJob::find($id);

            // update job
            $job->update($request->all());

            DB::commit();
            return response(new AlumniJobResource($job));
        }catch (\Exception $exception){
            DB::rollBack();
            return response($exception,400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(int $id): Response
    {
        DB::beginTransaction();
        try {
            AlumniJob::query()->find($id)->delete();
            DB::commit();
            return \response('Job Deleted');
        }catch (\Exception $exception){
            DB::rollBack();
            return response('Something went wrong',422);
        }
    }
}
