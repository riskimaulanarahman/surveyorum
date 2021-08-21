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
Route::get('/', 'HomeController@index');
// Route::auth();
// Auth::routes();

// Route::group( ['prefix' => 'admin','as' => 'admin.','middleware' => ['auth']], function() {
Route::group( ['as' => 'admin.','middleware' => ['auth']], function() {

    Route::get('/', 'HomeController@index')->name('index');

    Route::get('/customer','CustomerController@show')->name('customer');

    //master user
    Route::get('/master-user','masteruser\LoginUserController@show')->name('masteruser');

    //api
    Route::apiResource('/api/customer','CustomerController');

    
});

require __DIR__.'/auth.php';
