<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;
    public $timestamps  = false;
    protected $primaryKey = 'id';
    protected $table = 'aluno';
    protected $fillable = [
        'nome',
        'cpf',
        'rg',
        'email',
        'endereco',
        'numero',
        'cidade',
        'estado',
        'telefone',
        'dt_nascimento'
    ];
}
