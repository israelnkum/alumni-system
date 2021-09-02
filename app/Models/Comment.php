<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory, SoftDeletes;


    protected $fillable = [
        'topicId',
        'text',
        'authorId',
    ];

    public function topic(): BelongsTo
    {
        return $this->belongsTo(Topic::class, 'topicId');
    }
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'authorId');
    }

    public function replies(): MorphMany
    {
        return $this->morphMany(Reply::class,'replieable');
    }
}
