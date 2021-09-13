<?php
namespace App\Helpers;
use Illuminate\Container\Container;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

/**
 *
 */
class ReadWrite
{

	protected $plugin_id = '';
	protected $organization_id = '';
	protected $collection_name = '';
	protected $bulk_write =  false;
	protected $object_id = '';
	protected $filter = '';
	protected $payload = '';


	public static function write($payload, $filter = null, $object_id = null )
    {

        // send data to zuri core here for write operation
        //  POST: /data/write/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        return $payload;
    }


    public static function read($filter = null, $object_id = null )
    {
    	//  GET: /data/read/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        
    }


    public static function delete($filter = null, $object_id = null )
    {
        
    }
}
