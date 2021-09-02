<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class TopicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return [
            'id' => $this->id,
            'author'=> $this->user->name,
            'title' => $this->title,
            'created_at' => $this->created_at,
            'comment_count' => $this->comments->count(),
            'comments' => CommentResource::collection($this->comments),
        ];
    }
}
