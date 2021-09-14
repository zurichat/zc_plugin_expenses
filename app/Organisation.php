<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Room;

class Organisation extends Model
{
    public function rooms(){
   
        return $this->hasMany(Room::class);
             // Eloquent relationships defines how the Post model and Category relate ,either it hasOne, hasMany, belongsTo, belongsToMany
    }
}
