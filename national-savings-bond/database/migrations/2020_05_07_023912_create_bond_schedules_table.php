<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBondSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bond_schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bond_type_id')->nullable();
            $table->date('schedule_date')->bullable();
            $table->string('draw_number')->bullable();
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
        Schema::dropIfExists('bond_schedules');
    }
}
