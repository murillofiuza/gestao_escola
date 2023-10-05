<?php

namespace App\Http\Controllers;

use App\Http\Requests\AlunoStoreRequest;
use Illuminate\Http\Request;
use App\Models\Aluno;

class AlunoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Aluno
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AlunoStoreRequest $request)
    {
       // return Aluno::create($request->all());   
     /*$input = $request->validated();
     $aluno = auth()->user()->  ($input);*/

     //return new Aluno
     //return Aluno::create($request->all());

    }

    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Aluno::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $aluno = Aluno::findOrFail($id);

        $aluno->update($request->all());

        return $aluno;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Aluno::destroy($id);
    }
}
