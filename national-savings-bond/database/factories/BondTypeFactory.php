<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\BondType;
use Faker\Generator as Faker;
use App\User;


$factory->define(BondType::class, function (Faker $faker) {
    return [
        'amount' => $faker->numberBetween(1000,9000),
        'status' => User::all()->random()->id,
        //'status' => 1,
        'first_prize' => $faker->numberBetween(1000,9000),
        'second_prize' => $faker->numberBetween(1000,9000),
        'third_prize' => $faker->numberBetween(1000,9000)
    ];
});

