<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', 'IndexController@index')->name('index');
Route::get('/register', 'IndexController@index');
Route::get('/login', 'IndexController@index');

//ol testing
Route::get('/display-map', 'MapController@index');
Route::get('/test', 'RouteController@test');


Route::get('/new-route', 'RouteController@create');
Route::post('/new-route', 'RouteController@store');
Route::post('/route/{id}', 'RouteController@update');
Route::get('/route/{id}', 'RouteController@view');


Route::get('/api/activities', 'ActivityController@view');

