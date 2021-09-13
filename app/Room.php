<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Organisation;

class Room extends Model
{
    protected $fillable = [
        'title',
        'excerpt',
        'body',
    ];

    public function users(){
   
        return $this->hasMany(User::class);
             // Eloquent relationships defines how the Post model and Category relate ,either it hasOne, hasMany, belongsTo, belongsToMany
    }
    public function organisation(){
   
        return $this->belongsTo(Organisation::class);
             // Eloquent relationships defines how the Post model and Category relate ,either it hasOne, hasMany, belongsTo, belongsToMany
    }

}
