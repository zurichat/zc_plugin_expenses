<?php

namespace App\Zuri;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\ReadWrite;
use Illuminate\Support\Facades\Validator;

class Expense
{
    //

    private static $collection_name = 'expenses_list_collection';
    
    private $rules = [
        "author_id"=>"required",
        "author_name" =>"required",
        // .. more rules here ..
    ];

    private $errors;


	// rewrite model creation to zuri api read/write interface
	public static function create ($data){
		$data['collection_name'] = static::$collection_name;
		$res = ReadWrite::post($data);
		return $res;
	}


	// rewrite model saving to zuri api read/write interface
	public static function save ($data){
		$data['collection_name'] = static::$collection_name;
		$res = ReadWrite::put($data);
		return $res;
	}

	// rewrite model find to zuri api read/write interface
	public static function find ($params, $query){
		$params['collection_name'] = static::$collection_name;
		$res = ReadWrite::get($params, $query);
		return $res;
	}

	// rewrite model all to zuri api read/write interface
	public static function all ($params, $query){
		$params['collection_name'] = static::$collection_name;
		$res = ReadWrite::get($params, $query);
		return $res;
	}


	// rewrite model _firstOrCreate to zuri api read/write interface
	public static function firstOrCreate ($data){
		return;
	}

	// rewrite model _firstOrCreate to zuri api read/write interface
	public static function where ($query){
		$collection_name = static::$collection_name;
		$filter = $id;
		$res = ReadWrite::read($collection_name, $filter, null);
		return $res;
	}

	// rewrite model delete to zuri api read/write interface
	public static function delete ($params){
		$params['collection_name'] = static::$collection_name;
		$res = ReadWrite::delete($params);
		return $res;
	}

	public function validate($data)
    {
        $v = Validator::make($data, $this->rules);
        
        if ($v->fails())
        {
            $this->errors = $v->errors()->toArray();
            return false;
        }

        return true;
    }


    public function errors()
    {
        return $this->errors;
    }

}
