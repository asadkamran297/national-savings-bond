<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'Admin',
            'role_id' => 1,
            'email' => 'admin@nss.com',
            'password' => bcrypt('123456'),
            'image' => '1.jpg'
        ]);
    }
}
