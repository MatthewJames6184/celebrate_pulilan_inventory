<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('business_applications', function (Blueprint $table) {
            $table->string('business_type')->default('accommodation')->after('category');
        });

        DB::table('business_applications')
            ->where(function ($query) {
                $query->where('category', 'like', '%restaurant%')
                    ->orWhere('category', 'like', '%cafe%')
                    ->orWhere('category', 'like', '%café%');
            })
            ->update(['business_type' => 'restaurant']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('business_applications', function (Blueprint $table) {
            $table->dropColumn('business_type');
        });
    }
};
