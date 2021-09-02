<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyTheUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    // @Aduramimo issue #129
    public function up()
    {
      Schema::table('users', function (Blueprint $table) {
            DB::statement('ALTER Table `users` ALTER `admin` SET DEFAULT 1;');
     

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
}
// @Aduramimo issue #129