<?php
namespace App\Helpers;
use Illuminate\Container\Container;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

/**
 *
 */
class ZuriInterface
{

	protected static $plugin_id = '613ba9de41f5856617552f51';
	protected static $organization_id = '6133c5a68006324323416896';


	public static function post($data, $url )
    {

        $body = [
            'plugin_id' => static::$plugin_id,
            'org_id' => static::$organization_id,
        ];
        $header = [];
        $method = 'POST';
        try {

            
            $client = new \GuzzleHttp\Client();
            $res = $client->request($method, $url, [
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

        return $res;
    }


    public static function get($url, $filter = null, $object_id = null )
    {
        
        try {

            if($filter){
                $query = "filter={$filter}";
            }elseif ($object_id) {
                $query = "_id={$object_id}";
            }else{
                $query = '';
            }

            $plugin_id = static::$plugin_id;
            $organization_id = static::$organization_id;

            $url =  $url  . "/?{$query}";
            $method = 'GET';
            $body = null;
            $header = [];

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

        return $res;
        
    }


    public static function put($filter = null, $object_id = null )
    {
        
    }

    public static function patch($filter = null, $object_id = null )
    {
        
    }


    public static function delete($filter = null, $object_id = null )
    {
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
