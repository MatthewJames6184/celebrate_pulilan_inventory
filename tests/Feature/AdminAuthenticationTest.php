<?php

use App\Models\Admin;
use App\Models\User;

test('administrator can sign in through the separate admin guard', function () {
    $admin = Admin::create([
        'name' => 'Administrator',
        'email' => 'admin@example.com',
        'password' => 'password',
    ]);

    $this->post(route('admin.login.store', [], false), [
        'email' => $admin->email,
        'password' => 'password',
    ])->assertRedirect(route('admin.dashboard', [], false));

    $this->assertAuthenticatedAs($admin, 'admin');
});

test('regular users cannot access administrator routes', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('admin.dashboard', [], false))
        ->assertRedirect(route('admin.login', [], false));
});

test('administrator email cannot be registered as a regular user', function () {
    Admin::create([
        'name' => 'Administrator',
        'email' => 'admin@example.com',
        'password' => 'password',
    ]);

    $this->post(route('register', [], false), [
        'first_name' => 'Regular',
        'last_name' => 'User',
        'email' => 'admin@example.com',
        'password' => 'Password123!',
        'password_confirmation' => 'Password123!',
        'account_type' => 'visitor',
    ])->assertSessionHasErrors('email');

    $this->assertDatabaseMissing('users', ['email' => 'admin@example.com']);
});
