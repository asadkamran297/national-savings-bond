<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBondsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bonds', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('bond_type_id')->nullable();
            $table->string('serial_no')->nullable();
            $table->date('start_date')->nullable();
            $table->SoftDeletes();
            $table->timestamps();

            $table->foreign('bond_type_id')
                  ->references('id')->on('bond_types')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bonds');
    }
}
