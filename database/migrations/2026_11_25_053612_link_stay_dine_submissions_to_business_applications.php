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
        Schema::table('business_applications', function (Blueprint $table) {
            $table->foreignId('reviewed_by_admin_id')->nullable()->constrained('admins')->nullOnDelete();
        });

        Schema::table('stay_dine_submissions', function (Blueprint $table) {
            $table->foreignId('business_application_id')->nullable()->unique()->constrained()->nullOnDelete();
            $table->foreignId('reviewed_by_admin_id')->nullable()->constrained('admins')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('business_applications', function (Blueprint $table) {
            $table->dropConstrainedForeignId('reviewed_by_admin_id');
        });

        Schema::table('stay_dine_submissions', function (Blueprint $table) {
            $table->dropConstrainedForeignId('reviewed_by_admin_id');
            $table->dropUnique(['business_application_id']);
            $table->dropConstrainedForeignId('business_application_id');
        });
    }
};
