<?php

use App\Models\User;

function approvedBusinessUser(string $businessType = 'accommodation'): User
{
    $user = User::factory()->create(['account_type' => 'business']);

    $user->businessApplications()->create([
        'business_name' => 'Pulilan Garden Resort',
        'business_type' => $businessType,
        'category' => $businessType === 'restaurant' ? 'Restaurant' : 'Accommodation',
        'area' => 'Poblacion',
        'address' => '123 Main Street, Pulilan',
        'email' => $user->email,
        'description' => 'A local business serving visitors in Pulilan.',
        'status' => 'approved',
    ]);

    return $user;
}

test('only an approved business owner can open the listing form', function () {
    $owner = approvedBusinessUser();

    $this->actingAs($owner)
        ->get(route('stay.dine.submit-listing', [], false))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('stay-dine/submit-listing')
            ->where('businessType', 'accommodation')
            ->where('businessEmail', $owner->email));

});

test('approved business owner submits listing details tied to approved type and email', function () {
    $owner = approvedBusinessUser('restaurant');

    $this->actingAs($owner)
        ->post(route('stay.dine.submit.store', [], false), [
            'type' => 'accommodation',
            'name' => 'Pulilan Garden Restaurant',
            'category' => 'Restaurant',
            'area' => 'Poblacion',
            'address' => '123 Main Street, Pulilan',
            'email' => 'spoofed@example.com',
            'phone' => '09171234567',
            'website' => 'https://example.com',
            'description' => 'Local dishes and refreshments.',
        ])
        ->assertRedirect(route('dashboard', [], false));

    $this->assertDatabaseHas('stay_dine_submissions', [
        'user_id' => $owner->id,
        'type' => 'restaurant',
        'business_application_id' => $owner->businessApplications()->firstOrFail()->id,
        'email' => $owner->email,
        'status' => 'pending',
    ]);
});

test('business owner can resubmit rejected listing details for review', function () {
    $owner = approvedBusinessUser();
    $application = $owner->businessApplications()->firstOrFail();
    $application->stayDineSubmission()->create([
        'user_id' => $owner->id,
        'type' => 'accommodation',
        'name' => 'Old listing',
        'email' => $owner->email,
        'status' => 'rejected',
    ]);

    $this->actingAs($owner)
        ->post(route('stay.dine.submit.store', [], false), [
            'name' => 'Updated listing',
            'address' => '456 New Street, Pulilan',
            'email' => $owner->email,
        ])
        ->assertRedirect(route('dashboard', [], false));

    $this->assertDatabaseHas('stay_dine_submissions', [
        'id' => $application->stayDineSubmission->id,
        'name' => 'Updated listing',
        'status' => 'pending',
    ]);
    $this->assertDatabaseCount('stay_dine_submissions', 1);
});

test('guests cannot submit a listing directly', function () {
    $this->get(route('stay.dine.submit-listing', [], false))
        ->assertRedirect(route('login', [], false));

    $this->post(route('stay.dine.submit.store', [], false), [
        'name' => 'Unauthorized listing',
        'address' => '123 Main Street, Pulilan',
        'email' => 'owner@example.com',
    ])->assertRedirect(route('login', [], false));
});
