<?php

use App\Models\User;
use App\Notifications\BusinessApplicationApproved;
use Illuminate\Support\Facades\Notification;

function businessApplicationPayload(string $email): array
{
    return [
        'business_name' => 'Pulilan Garden Resort',
        'category' => 'Resort',
        'area' => 'Poblacion',
        'address' => '123 Main Street, Pulilan',
        'email' => $email,
        'phone' => '09171234567',
        'website' => 'https://example.com',
        'description' => 'A local resort serving visitors in Pulilan.',
    ];
}

test('business registration creates a pending application for the registered email', function () {
    $this->post(route('register', [], false), [
        'first_name' => 'Juan',
        'last_name' => 'Dela Cruz',
        'email' => 'juan@example.com',
        'password' => 'Password123!',
        'password_confirmation' => 'Password123!',
        'account_type' => 'business',
        'business_name' => 'Pulilan Garden Resort',
        'business_category' => 'Resort',
        'business_area' => 'Poblacion',
        'business_address' => '123 Main Street, Pulilan',
        'business_phone' => '09171234567',
        'business_website' => 'https://example.com',
        'business_description' => 'A local resort serving visitors in Pulilan.',
    ])->assertRedirect(route('dashboard', ['apply-business' => 1], false));

    $user = User::where('email', 'juan@example.com')->firstOrFail();

    expect($user->role)->not->toBe('business');
    $this->assertDatabaseHas('business_applications', [
        'user_id' => $user->id,
        'email' => $user->email,
        'status' => 'pending',
    ]);
});

test('authenticated visitors can apply for business verification using their account email', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('business-applications.store', [], false), businessApplicationPayload($user->email))
        ->assertRedirect();

    $this->assertDatabaseHas('business_applications', [
        'user_id' => $user->id,
        'business_name' => 'Pulilan Garden Resort',
        'email' => $user->email,
        'status' => 'pending',
    ]);
});

test('business applicants cannot submit an application for another email address', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('business-applications.store', [], false), businessApplicationPayload('someone-else@example.com'))
        ->assertSessionHasErrors('email');

    $this->assertDatabaseMissing('business_applications', [
        'user_id' => $user->id,
    ]);
});

test('choosing business at login opens the application flow on the dashboard', function () {
    $user = User::factory()->create();

    $this->post(route('login', [], false), [
        'email' => $user->email,
        'password' => 'password',
        'account_type' => 'business',
    ])->assertRedirect(route('dashboard', ['apply-business' => 1], false));
});

test('guests cannot submit business applications', function () {
    $this->post(route('business-applications.store', [], false), businessApplicationPayload('owner@example.com'))
        ->assertRedirect(route('login', [], false));
});

test('admin approval grants business access and emails the applicant', function () {
    Notification::fake();
    $applicant = User::factory()->create();
    $admin = User::factory()->create(['role' => 'admin']);
    $application = $applicant->businessApplications()->create(businessApplicationPayload($applicant->email));

    $this->actingAs($admin)
        ->patch(route('admin.business-applications.review', ['businessApplication' => $application->id], false), [
            'status' => 'approved',
        ])
        ->assertRedirect();

    expect($applicant->fresh()->role)->toBe('business');
    expect($application->fresh()->status)->toBe('approved');
    Notification::assertSentTo($applicant, BusinessApplicationApproved::class);
});

test('non-admin users cannot review business applications', function () {
    $applicant = User::factory()->create();
    $user = User::factory()->create();
    $application = $applicant->businessApplications()->create(businessApplicationPayload($applicant->email));

    $this->actingAs($user)
        ->patch(route('admin.business-applications.review', ['businessApplication' => $application->id], false), [
            'status' => 'approved',
        ])
        ->assertForbidden();

    expect($application->fresh()->status)->toBe('pending');
    expect($applicant->fresh()->role)->not->toBe('business');
});
