<?php
namespace App\Helpers;
use Illuminate\Container\Container;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

/**
 *
 */
class ZuriInterface
{

    protected static $apiBase = 'https://api.zuri.chat';


    public static function post($data )
    {

        // send data to zuri core here for write operation
        //  POST: /data/write/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        $header = [];
        $url =    static::$apiBase . "/data/write";
        $res = Http::post($url, $data);
        return $res->json();
    }

    public static function put($data )
    {

        // send data to zuri core here for write operation
        //  POST: /data/write/{plugin_id}/{collection_name}/{organization_id}/?_id=""
        $header = [];
        $url =    static::$apiBase . "/data/write";
        $res = Http::put($url, $data);
        return $res->json();
    }


    public static function get($params, $query = null )
    {
        //  GET: /data/read/{plugin_id}/{collection_name}/{organization_id}/?_id=""

        $url =    static::$apiBase . "/data/read/{$params['plugin_id']}/{$params['collection_name']}/{$params['organization_id']}";
        $method = 'GET';
        $body = null;
        $header = [];

        // $res = static::guzzleMethod($body, $header, $url, $method);
         $res = Http::get($url, $query);
        return $res->json();
        
    }


    public static function delete($params)
    {
        $header = [];
        $url =    static::$apiBase . "/data/delete";
        $res = Http::post($url, $params);
        return $res->json();
    }

}
