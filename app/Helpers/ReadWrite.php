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
    protected static $apiBase = 'https://api.zuri.chat/data/write';


	public static function write($payload, $filter = null, $object_id = null )
    {

        // send data to zuri core here for write operation
        //  POST: /data/write/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        $body = [
            'plugin_id' => '613ba9de41f5856617552f51',
            'organization_id' => '6133c5a68006324323416896',
            'collection_name' => 'Expense',
            'payload' => $payload
        ];
        $header = [];
        $method = "POST";
        $res = static::guzzleMethod($body, $header, $method);
        return $res;
    }


    public static function read($filter = null, $object_id = null )
    {
    	//  GET: /data/read/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        
    }


    public static function delete($filter = null, $object_id = null )
    {
        
    }


    public static function guzzleMethod ($body, $header, $method){
        try {

            $url = static::$apiBase;
            $client = new \GuzzleHttp\Client();
            $res = $client->request('POST', "{$url}", [
                'body' => json_encode($body),
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
