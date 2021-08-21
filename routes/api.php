<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//master data surat
// Route::apiResource('/rest/customer','CustomerController');
Route::get('/loginandroid','masteruser\LoginAndroidController@login')->name('android.login');
Route::get('/indexcustomer','masteruser\LoginAndroidController@indexcustomer')->name('android.indexcustomer');
Route::get('/updatecustomer/{id}','masteruser\LoginAndroidController@updatecustomer')->name('android.updatecustomer');


Route::post('/upload-berkas/{id}/{module}','BerkasController@update')->name('uploadberkas');

//master user
Route::apiResource('/master-user','masteruser\LoginUserController');
