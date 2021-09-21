<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    protected $fillable = [
        'id',
        'user_id',
        'room_id',
        'organisation_id',
        'title',  
        'item',          
       'unit_price',
        'quantity',
      'total_price',
      'description',
      'status',
    //   'admin_id'      
    ];
}
