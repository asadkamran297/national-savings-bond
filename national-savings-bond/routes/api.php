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

Auth::routes();



/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware('auth:api')->group(function () {

	Route::get('/bondtype/list/{page?}','BondTypeController@list')->name('bondtype.list');
	Route::post('/bondtype/store','BondTypeController@store')->name('bondtype.store');
	Route::delete('/bondtype/delete','BondTypeController@delete')->name('bondtype.delete');

	Route::get('/bondtype/edit/{id}','BondTypeController@edit')->name('bondtype.edit');
	Route::patch('/bondtype/update','BondTypeController@update')->name('bondtype.update');

	Route::get('/dashboard/stats','DashboardController@stats')->name('dashboard.stats');

});
