<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Storage;
use Tests\TestCase;
use App\User;
use App\BondType;

class UserTest extends TestCase
{
	use RefreshDatabase;
	use WithFaker;

	/*use DatabaseMigrations;

    public function setUp(): void
    {
        parent::setUp();

        // seed the database
        //$this->artisan('db:seed');
        // alternatively you can call
        $this->seed();
    }*/

    /**
     * A basic unit test example.
     *
     * @return void
     */
    /*public function testExample()
    {
        //$response = $this->get('api/dashboard/stats');
        //$response->assertStatus(200);

        $user = factory('App\User')->create();
        $response = $this->actingAs($user)->get('/');
        //$response->assertSuccessful();
        $response->assertStatus(200);
        $user->forceDelete();
    }*/

    /*public function test_can_create_bondtype() {

        $data = [
            'amount' => $this->faker->numberBetween(1000,9000),
	        //'status' => User::all()->random()->id,
	        'status' => 1,
	        'first_prize' => $this->faker->numberBetween(1000,9000),
	        'second_prize' => $this->faker->numberBetween(1000,9000),
	        'third_prize' => $this->faker->numberBetween(1000,9000)
        ];

        //$this->post(route('bondtype.store'), $data);

        $this->post(route('bondtype.store'), $data)
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => "The Data has been Inserted."
        ]);

    }*/

    /*public function test_can_update_bondtype() {
        
    	// $users = User::all();
    	// dd($users);

        //$bondtype = factory('App\Models\BondType',2)->create();
        $bondtype = factory('App\Models\BondType')->create();
        
        // dd($bondtype);

        $data = [
        	'id' => $bondtype->id,
            'amount' => $this->faker->numberBetween(1000,9000),
	        'status' => User::all()->random()->id,
	        'first_prize' => $this->faker->numberBetween(1000,9000),
	        'second_prize' => $this->faker->numberBetween(1000,9000),
	        'third_prize' => $this->faker->numberBetween(1000,9000)
        ];

        //dd($data);

        $this->patch(route('bondtype.update'), $data)
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => "The Data has been Updated."
        ]);
    }*/

    /*public function test_can_delete_bodytype() {

        $bondtype = factory('App\Models\BondType')->create();

        $this->delete(route('bondtype.delete', $bondtype->id))
            ->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => "The Data has been Deleted."
        ]);
    }*/

    public function test_can_list_bodytype() {

        /*$posts = factory(Post::class, 2)->create()->map(function ($post) {
            return $post->only(['id', 'title', 'content']);
        });*/

        // $user = factory('App\User')->create();

        //dd($this->user);

        // dd($user);

        $result = factory('App\Models\BondType', 4)->create();

        //dd($bondtypes);

        $this->actingAs($this->user,'api')
            ->get(route('bondtype.list'))
            ->assertStatus(200);
            /*->assertJson([
                'status'      => true,
                'data'        => $result,
                'total_pages' => 1,
                'message'     => "The Data Sucessfully Retrieved."
            ]);*/
            /*->assertJsonStructure([
                '*' => [ 'id', 'title', 'content' ],
            ]);*/
    }
}
