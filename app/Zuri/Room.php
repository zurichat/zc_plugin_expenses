<?php

namespace App\Zuri;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Helpers\ZuriInterface;
use Illuminate\Support\Facades\Validator;


class Room
{
    protected $fillable = [
        'room_name',
        'creator_id',
        'visibility',
        'created_at',
        'plugin_id',
        'organisation_id'
    ];

    private $rules = [
        "plugin_id" => "required",
        "organization_id" => "required",
        "name" => "required",
        "creator_id"=>"required",
        "visibility" =>"required"
        // .. more rules here ..
    ];

    private $errors;
    private static $collection_name = 'expense_rooms_collection';


    // rewrite model creation to zuri api endpoint

    public static function create ($data){
        $data['collection_name'] = static::$collection_name;
        $res = ZuriInterface::post($data );
        return $res;
    }


    // rewrite model saving to zuri api endpoint
    public static function save ($id, $data){
        return;
    }

    // rewrite model find to zuri api endpoint
    public static function find ($id){
        $collection = static::$collection;
        $object_id = $id;
        $res = ZuriInterface::read($collection, null, $object_id);
        return $res;
    }

    // rewrite model all to zuri api endpoint
    public static function all ($params, $query){
        $params['collection_name'] = static::$collection_name;
        $res = ZuriInterface::get($params, $query);
        return $res;
    }


    // rewrite model _firstOrCreate to zuri api endpoint
    public static function firstOrCreate ($data){
        return;
    }

    // rewrite model _firstOrCreate to zuri api endpoint
    public static function where ($query){
        $collection = static::$collection;
        $filter = $id;
        $res = ZuriInterface::read($collection, $filter, null);
        return $res;
    }

    // rewrite model _firstOrCreate to zuri api endpoint
    public static function delete ($id){
        return;
    }




    public function validate($data){
        $v = Validator::make($data, $this->rules);
        if ($v->fails())
        {
            $this->errors = $v->errors()->toArray();
            return false;
        }
        return true;
    }

    public function validateShow($data)
    {
        $v = Validator::make($data, [
            "plugin_id" => "required",
            "organization_id" => "required",
        ]);

        if ($v->fails())
        {
            $this->errors = $v->errors()->toArray();
            return false;
        }
        return true;
    }

    public function errors(){
        return $this->errors;
    }

}
