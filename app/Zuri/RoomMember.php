<?php

namespace App\Zuri;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Helpers\ZuriInterface;
use Illuminate\Support\Facades\Validator;


class RoomMember
{

    private $rules = [
        "room_id" => "required",
        "user_id" => "required",
        "role"=>"nullable",
        "abilities" => "nullable"
    ];

    private $errors;
    private static $collection_name = 'expense_room_members_collection';


    // rewrite model creation to zuri api endpoint

    public static function create ($data){
        $data['collection_name'] = static::$collection_name;
        $res = ZuriInterface::post($data );
        return $res;
    }


    // rewrite model saving to zuri api read/write interface
    public static function save ($data){
        $data['collection_name'] = static::$collection_name;
        $res = ZuriInterface::put($data);
        return $res;
    }

    // rewrite model find to zuri api read/write interface
    public static function find ($params, $query){
        $params['collection_name'] = static::$collection_name;
        $res = ZuriInterface::get($params, $query);
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

    // rewrite model delete to zuri api read/write interface
    public static function delete ($params){
        $params['collection_name'] = static::$collection_name;
        $res = ZuriInterface::delete($params);
        return $res;
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

    public function errors(){
        return $this->errors;
    }

}
