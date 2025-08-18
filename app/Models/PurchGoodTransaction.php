<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchGoodTransaction extends Model
{
    use HasFactory;

    protected $table = 'purch_goods_transaction';

    protected $fillable = [
        'trans_id',
        'account_id',
        'purch_goods_id',
        'qty',
        'qtyUnit',
        'emission',
    ];
}
