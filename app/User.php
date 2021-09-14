<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Room;

class User extends Model
{
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
        'password1',
        'remember_token',
        'created_at',
        'updated_at',
        'id'
        
    ];

    public function room(){
        // Eloquent relationships defines how the Post model and User relate ,either it hasOne, hasMany, belongsTo, belongsToMany
        return $this->belongsTo(Room::class);
}
}
