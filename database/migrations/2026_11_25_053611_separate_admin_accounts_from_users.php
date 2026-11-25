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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        DB::table('users')
            ->where('role', 'admin')
            ->orderBy('id')
            ->get(['id', 'name', 'email', 'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at'])
            ->each(fn (object $admin) => DB::table('admins')->insert((array) $admin));

        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('role', 'account_type');
        });

        DB::table('users')->where('account_type', 'admin')->delete();

        DB::table('users')->where('account_type', '!=', 'business')->update(['account_type' => 'visitor']);

        Schema::table('users', function (Blueprint $table) {
            $table->string('account_type')->default('visitor')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('account_type', 'role');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('users')->change();
        });

        DB::table('admins')
            ->orderBy('id')
            ->get(['id', 'name', 'email', 'email_verified_at', 'password', 'remember_token', 'created_at', 'updated_at'])
            ->each(fn (object $admin) => DB::table('users')->insert([
                'id' => $admin->id,
                'name' => $admin->name,
                'email' => $admin->email,
                'role' => 'admin',
                'email_verified_at' => $admin->email_verified_at,
                'password' => $admin->password,
                'remember_token' => $admin->remember_token,
                'created_at' => $admin->created_at,
                'updated_at' => $admin->updated_at,
            ]));

        Schema::dropIfExists('admins');
    }
};
