<?php

use App\Http\Controllers\AlunoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('aluno', function(){
    return response()->json(['msg' => 'Hello World!']);
});

Route::get('professor', function(){
    return response()->json(['msg' => 'END POINT PROFESSOR!']);
});

Route::get('matricula', function(){
    return response()->json(['msg' => 'END POINT MATRICULA!']);
});

Route::get('curso', function(){
    return response()->json(['msg' => 'END POINT CURSO!']);
});


//Registrando Aluno
Route::post('', [AlunoController::class, 'store']);



/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
