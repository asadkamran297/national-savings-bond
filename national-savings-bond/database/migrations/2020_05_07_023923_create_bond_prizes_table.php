<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBondPrizesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bond_prizes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bond_id')->nullable();
            $table->unsignedBigInteger('bond_schedule_id')->nullable();
            $table->string('prize_type')->bullable();
            $table->SoftDeletes();
            $table->timestamps();

            $table->foreign('bond_id')
                  ->references('id')->on('bonds')
                  ->onDelete('cascade');

            $table->foreign('bond_schedule_id')
                  ->references('id')->on('bond_schedules')
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
        Schema::dropIfExists('bond_prizes');
    }
}
