<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Organisation;
use Faker\Generator as Faker;
use App\User;
use App\Room;


$factory->define(Organisation::class, function (Faker $faker) {
    return [
        'user_id' => User::factory(),
        // setting user_id as so leaves laravel to set the appropriate id to user
        'room_id' => Room::factory(),
        'name' => $this->faker->sentence()
    ];
});
