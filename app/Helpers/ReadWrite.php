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

	protected static $plugin_id = '613ba9de41f5856617552f51';
	protected static $organization_id = '6133c5a68006324323416896';
	protected $bulk_write =  false;
    protected static $apiBase = 'https://api.zuri.chat';


	public static function write($data, $filter = null, $object_id = null )
    {

        // send data to zuri core here for write operation
        //  POST: /data/write/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        $url = static::$apiBase . "/data/write";
        $body = [
            'plugin_id' => static::$plugin_id,
            'organization_id' => static::$organization_id,
            'collection_name' => $data['collection'],
            'payload' => $data
        ];
        $header = [];
        $method = 'POST';
        $res = static::guzzleMethod($body, $header, $url, $method);
        return $res;
    }


    public static function read($collection, $filter = null, $object_id = null )
    {
    	//  GET: /data/read/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        if($filter){
            $query = "filter={$filter}";
        }elseif ($object_id) {
            $query = "_id={$object_id}";
        }else{
            $query = '';
        }

        $plugin_id = static::$plugin_id;
        $organization_id = static::$organization_id;

        $url =   static::$apiBase . "/data/read/{$plugin_id}/{$collection}/{$organization_id}/?{$query}";
        $method = 'GET';
        $body = null;
        $header = [];
        $res = static::guzzleMethod($body, $header, $url, $method);
        return $res;
        
    }


    public static function delete($filter = null, $object_id = null )
    {
        
    }


    public static function guzzleMethod ($body, $header, $url, $method){
        try {

            
            $client = new \GuzzleHttp\Client();
            $res = $client->request($method, "{$url}", [
                'body' => $body ? json_encode($body) : '',
                'headers' => $header
            ]);

            $response = (json_decode($res->getBody()->getContents()));
            if( $response ){
               return $response;
            } else{
                return;
            }
            
        } catch (Exception $e) {
            return $e;
        }
    }
}
