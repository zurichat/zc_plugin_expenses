<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\ReadWrite;

class Expense extends Model
{
    //

    private static $collection = 'Expense';


	// rewrite model creation to zuri api read/write interface
	public static function _create ($data){
		$data['collection'] = static::$collection;
		$res = ReadWrite::write($data);
		return $res;
	}


	// rewrite model saving to zuri api read/write interface
	public static function _save ($id, $data){
		return;
	}

	// rewrite model find to zuri api read/write interface
	public static function _find ($id){
		$data['collection'] = static::$collection;
		$res = ReadWrite::read($id);
		return $res;
	}

	// rewrite model all to zuri api read/write interface
	public static function _all (){
		$collection = static::$collection;
		$res = ReadWrite::read($collection);
		return $res;
	}


	// rewrite model _firstOrCreate to zuri api read/write interface
	public static function _firstOrCreate ($data){
		return;
	}

	// rewrite model _firstOrCreate to zuri api read/write interface
	public static function _where ($query){
		return;
	}

	// rewrite model _firstOrCreate to zuri api read/write interface
	public static function _destroy ($id){
		return;
	}


	 public function getCollection(){
        return $this->collection;
    }
}
