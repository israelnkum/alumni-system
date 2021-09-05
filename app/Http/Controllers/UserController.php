<?php

namespace App\Http\Controllers;

use App\Http\Helpers\HelperFunctions;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(UserResource::collection(User::all()));
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
        $checkName = User::query()->where('username', $request->username)->count();
        if ($checkName > 0){
            return response('User with the same username already exist', 400);
        }

        DB::beginTransaction();
        try {

            // add User to db
            $request['password'] = Hash::make($request->username);
            $user = User::create($request->all());

            // upload picture if picture is part of request
            if ($request->has('file') && $request->file != "null"){
                HelperFunctions::saveImage($user, $request->file('file'), 'users');
            }

            DB::commit();
            return response(new UserResource($user));
        }catch (Exception $exception){
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

            // add User to db
            $user = User::find($id);
            $user->update($request->all());

            // upload picture if picture is part of request
            if ($request->has('file') && $request->file != "null"){
                HelperFunctions::saveImage($user, $request->file('file'), 'users');
            }

            DB::commit();
            return response(new UserResource($user));
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
     * @return Application|ResponseFactory|Response
     */
    public function getAuthUser()
    {
        //  $activeRoles = $loggedInUser->activeRoles->pluck('name');
        return response(new UserResource(Auth::user()));
        // return [$loggedInUser->only(['id', 'name', 'username']), $activeRoles];

    }

    public function changePassword(Request $request){
        $this->validate($request,[
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        DB::beginTransaction();
        $user = Auth::User();
        try {
            if (!Hash::check($request['currentPassword'], $user->password)){
                return \response('Current Password is incorrect', 400);
            }elseif(Hash::check($request['password'], $user->password)){
                return \response('New Password is the same as current', 400);
            }else{
                $user->update([
                    'password' => Hash::make($request->password),
                    'passwordUpdated' => 1,
                ]);
                DB::commit();
                return \response(new UserResource($user));
            }
        }catch (Exception $exception){
            DB::rollBack();
            return \response('Something went wrong!', 400);
        }
    }
}
