<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;

Route::group(['prefix' => 'brand'], function () {
    route::controller(BrandsController::class)->group(
        function () {
            Route::get('index', 'index');
            Route::get('show/{id}', 'show');
            Route::post('store', 'store');
            Route::put('update_brand/{id}', 'update');
            Route::delete('delete_brand/{id}', 'delete');
        }
    );
});

Route::group(['prefix' => 'category'], function () {
    route::controller(CategoryController::class)->group(
        function () {
            Route::get('index', 'index');
            Route::get('show/{id}', 'show');
            Route::post('store', 'store');
            Route::put('update/{id}', 'update');
            Route::delete('delete/{id}', 'delete');
        }
    );
});

Route::group(['prefix' => 'location'], function () {
    route::controller(LocationController::class)->group(
        function () {
            Route::post('store', 'store');
            Route::put('update/{id}', 'update');
            Route::delete('delete/{id}', 'delete');
        }
    );
});


Route::group(['prefix' => 'product'], function () {
    route::controller(ProductController::class)->group(
        function () {
            Route::get('index', 'index');
            Route::get('show/{id}', 'show');
            Route::post('store', 'store');
            Route::put('update/{id}', 'update');
            Route::delete('delete/{id}', 'delete');
        }
    );
});

Route::group(['prefix' => 'order'], function () {
    route::controller(OrderController::class)->group(
        function () {
            Route::get('index', 'index');
            Route::get('show/{id}', 'show');
            Route::post('store', 'store');
            Route::get('get_order_items/{id}', 'get_order_items');
            Route::post('change_order_status/{id}', 'change_order_status');
        }
    );
});

Route::group([
    // 'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});