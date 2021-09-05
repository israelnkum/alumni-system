<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reply extends Model
{
    use HasFactory, SoftDeletes;


    public function replieable(){
        return $this->morphTo();
    }
    protected $fillable = [
        'replieable_id',
        'replieable_type',
        'text',
        'authorId',
    ];

    public function reply(): MorphMany
    {
        return $this->morphMany(Reply::class,'replieable');
    }

    public function replies(): MorphMany
    {
        return $this->morphMany(Reply::class,'replieable');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class,'authorId');
    }

}
