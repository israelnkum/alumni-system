<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Topic extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'author'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author');
    }


    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, 'topicId');
    }


    public function photo(): MorphOne
    {
        return $this->morphOne(Photo::class,'photoable')->withDefault([
            'photoUrl' => null
        ]);
    }
}
