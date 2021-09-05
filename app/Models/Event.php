<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'startDate',
        'endDate',
        'description',
        'userId',
    ];

    public function photo(): MorphOne
    {
        return $this->morphOne(Photo::class,'photoable')->withDefault([
            'photoUrl' => null
        ]);
    }

}
