<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    use HasFactory;
    public $timestamps  = false;
    protected $primaryKey = 'id';
    protected $table = 'professor';
    protected $fillable = [
        'nome',
        'email',
        'cpf',
        'endereco',
        'numero',
        'cidade',
        'estado',
        'telefone'
    ];
}
