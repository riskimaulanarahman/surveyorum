<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = 'tbl_cust';
    protected $primaryKey = 'id_cust';
    protected $guarded = ['id_cust'];

    public function users()
    {
        return $this->belongsTo('App\User','id_user','id');
    }

    public function userfv()
    {
        return $this->belongsTo('App\User','id_fv','id');
    }
}
