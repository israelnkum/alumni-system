<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory, SoftDeletes;


    protected $fillable = [
        'topicId',
        'text',
        'author',
    ];

    public function topic(): BelongsTo
    {
        return $this->belongsTo(Topic::class, 'topicId');
    }

}
