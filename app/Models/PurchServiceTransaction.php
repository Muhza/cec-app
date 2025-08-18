<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchServiceTransaction extends Model
{
    use HasFactory;

    protected $table = 'purch_service_transaction';

    protected $fillable = [
        'trans_id',
        'account_id',
        'purch_service_id',
        'qty',
        'qtyUnit',
        'emission',
    ];
}
