<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    //

    private $collection = 'Expense';


	// rewrite model creation to zuri api read/write interface
	public static function _create ($data){
		return $data;
	}


	// rewrite model saving to zuri api read/write interface
	public static function _save ($id, $data){
		return;
	}

	// rewrite model find to zuri api read/write interface
	public static function _find ($id){
		return;
	}

	// rewrite model all to zuri api read/write interface
	public static function _all ($data){
		return;
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
}
