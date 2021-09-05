<?php

namespace App\Http\Helpers;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class HelperFunctions
{
    static function saveImage($model, $file, $directory)
    {

        $image_name = uniqid().'.'. $file->getClientOriginalExtension();
        $file->storeAs(env('APP_PHOTO_PATH').'/'.$directory.'/', $image_name);
        $model->photo()->updateOrCreate(['photoable_id' => $model->id],[
            'photoUrl'=> $image_name
        ]);
    }
}
