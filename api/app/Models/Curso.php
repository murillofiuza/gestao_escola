<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;
    public $timestamps  = false;
    protected $primaryKey = 'id';
    protected $table = 'curso';
    protected $fillable = [
	    'nome',
        'requisitos',
        'cg_horaria'
    ];
}
