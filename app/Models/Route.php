<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity;
class Route extends Model
{
    use HasFactory;

    public function activities ()
    {
        return $this->belongsToMany(Activity::class);
    }
}
