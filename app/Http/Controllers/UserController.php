<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
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
     * @return Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
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
        }catch (\Exception $exception){
            DB::rollBack();
            return \response('Something went wrong!', 400);
        }
    }
}
