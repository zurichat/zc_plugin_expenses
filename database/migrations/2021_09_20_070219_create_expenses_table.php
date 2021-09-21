<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('room_id')->constrained()->cascadeOnDelete();
            // $table->foreignId('plugin_id')->constrained()->cascadeOnDelete();
            $table->foreignId('organisation_id')->constrained()->cascadeOnDelete();
            // $table->foreignId('admin_id')->constrained()->cascadeOnDelete();
            $table->string('title'); 
            $table->string('item');
            $table->string('total_price');
            $table->string('description');
            $table->string('status');                        
            $table->string('unit_price');
            $table->string('quantity');
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expenses');
    }
}
