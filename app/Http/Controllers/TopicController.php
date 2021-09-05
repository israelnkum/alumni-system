<?php

namespace App\Http\Controllers;

use App\Http\Helpers\HelperFunctions;
use App\Http\Resources\TopicResource;
use App\Models\Comment;
use App\Models\Reply;
use App\Models\Topic;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $topics = Topic::query()->where('author', Auth::user()->id)->get();
        return response()->json(TopicResource::collection($topics));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request): Response
    {
        DB::beginTransaction();
        try {

            $request['author'] = Auth::user()->id;
            // add topic to db
            $topic = Topic::create($request->all());

            // upload picture if picture is part of request
            if ($request->has('file') && $request->file != "null"){
                HelperFunctions::saveImage($topic, $request->file('file'), 'topics');
            }

            DB::commit();
            return response(new TopicResource($topic));
        }catch (Exception $exception){
            DB::rollBack();
            return response($exception,400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        return response()->json(new TopicResource(Topic::findOrFail($id)));
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
            // Find the topic based on ID
            $topic = Topic::find($id);

            // update topic with new data
            $topic->update($request->all());
            // upload picture if picture is part of request
            if ($request->has('file') && $request->file != "null"){
                HelperFunctions::saveImage($topic, $request->file('file'), 'topics');
            }
            DB::commit();
            return response(new TopicResource($topic));
        }catch (Exception $exception){
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
    public function destroy($id)
    {
        //
    }

    /**
     * @param Request $request
     * @return Application|Response|ResponseFactory
     */
    public function addComment(Request $request)
    {
//        return $request;
        DB::beginTransaction();
        try {
            if ($request->type == 'reply'){
                $comment = Comment::find($request->replyingToId);
                $comment->replies()->create([
                    'text' => $request->text,
                    'authorId' => Auth::user()->id
                ]);
                DB::commit();
                return response(new TopicResource(Topic::find($comment->topicId)));
            }elseif ($request->type == 'replyToReply'){
                $reply = Reply::find($request->replyingToId);
                $reply->replies()->create([
                    'text' => $request->text,
                    'authorId' => Auth::user()->id
                ]);
                DB::commit();
                $topicId = isset($reply->replieable->replieable) ? $reply->replieable->replieable->topicId : $reply->replieable->topicId;
                return response(new TopicResource(Topic::find($topicId)));
            }{
                $topic = Topic::find($request->replyingToId);
                $topic->comments()->create([
                    'text' => $request->text,
                    'authorId' => Auth::user()->id
                ]);
                DB::commit();
                return response(new TopicResource($topic));
            }

        }catch (Exception $exception){
            DB::rollBack();
            return response($exception,400);
        }
    }
}
