<?php

use Illuminate\Support\Facades\Route;
use App\Events\BondTypeInserted;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/sender',function(){

    event(new BondTypeInserted('success'));
});

Route::get('/sender',function(){

    return view('sender');
});

Route::get('/listener',function(){

    return view('listener');
});

Route::get('/', [
    'uses' => 'ReactController@show'
]);

Route::get('/{path?}', [
    'uses' => 'ReactController@dashboard',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

// Route::pattern('path', '[a-zA-Z0-9-/]+');
// Route::any( '{path}', function( $page ){   
// 	 //dd($page);
//      return view('welcome');
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/factory/user',function(){
	factory('App\User',10)->create();
	dd("Done");
});


