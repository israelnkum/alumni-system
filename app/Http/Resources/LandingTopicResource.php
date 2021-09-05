<?php

namespace App\Http\Resources;

use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LandingTopicResource extends JsonResource
{
    public $collects = Topic::class;
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return[
            'id' => $this->id,
            'author'=> $this->user->name,
            'title' => $this->title,
            'created_at' => $this->created_at,
            'comment_count' => $this->comments->count(),
            'authorId' =>$this->author,
            'photo' =>$this->photo->photoUrl,
        ];
    }
}
