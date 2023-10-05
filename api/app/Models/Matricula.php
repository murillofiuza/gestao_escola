<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matricula extends Model
{
    use HasFactory;
    public $timestamps  = false;
    protected $primaryKey = 'id';
    protected $table = 'matricula';
    protected $fillable = [
        'id_aluno',
        'id_curso',
        'dt_matricula'
    ];
}
