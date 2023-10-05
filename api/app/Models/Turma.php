<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turma extends Model
{
    use HasFactory;
    public $timestamps  = false;
    protected $primaryKey = 'id';
    protected $table = 'turma';
    protected $fillable = [
        'id_curso',
        'id_professor',
        'dt_inicio',
        'dt_final',
        'cg_horaria'
    ];
}
