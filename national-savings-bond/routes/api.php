<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//echo str_replace("public","",$_SERVER['DOCUMENT_ROOT']).'app\Models\Configuration.php';

include(str_replace("public","",$_SERVER['DOCUMENT_ROOT']).'app\Models\Configuration.php');

Auth::routes();



/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

$middlewares = [];

if($authentication_api)
{
    $middlewares[] = 'auth:api';
}

Route::middleware($middlewares)->group(function () {

	Route::get('/bondtype/list/{page?}','BondTypeController@list')->name('bondtype.list');
	Route::post('/bondtype/store','BondTypeController@store')->name('bondtype.store');
	Route::delete('/bondtype/delete/{id}','BondTypeController@delete')->name('bondtype.delete');

	Route::get('/bondtype/edit/{id}','BondTypeController@edit')->name('bondtype.edit');
	Route::patch('/bondtype/update','BondTypeController@update')->name('bondtype.update');

	Route::get('/dashboard/stats','DashboardController@stats')->name('dashboard.stats');

	Route::post('/bond/store','BondController@store')->name('bond.store');

});
