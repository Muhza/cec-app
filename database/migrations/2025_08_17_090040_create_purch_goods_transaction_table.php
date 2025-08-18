<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('purch_goods_transaction', function (Blueprint $table) {
            $table->id();
            $table->string('trans_id');
            $table->integer('account_id')->unsigned();
            $table->integer('purch_goods_id')->unsigned();
            $table->decimal('qty', 8,6);
            $table->string('qtyUnit');
            $table->decimal('emission', 8,6);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('purch_goods_transaction');
    }
};
