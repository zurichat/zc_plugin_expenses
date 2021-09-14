<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Organisation;
use App\Room;
use App\Post;
use App\User;
use Faker\Generator as Faker;

$factory->define(Room::class, function (Faker $faker) {
    return [
        'user_id' => User::factory(),
        'organisation_id' => Organisation::factory()
            
    ];
});
