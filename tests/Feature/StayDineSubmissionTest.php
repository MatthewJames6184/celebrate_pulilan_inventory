<?php

test('stay dine submission page is available', function () {
    $response = $this->get(route('stay.dine.submit-listing', [], false));

    $response->assertOk();
    $response->assertSessionHasNoErrors();
});

it('supports the public listing route without dynamic route conflicts', function () {
    $response = $this->get('/stay-dine/submit-listing');

    $response->assertOk();
});

test('guest can submit a stay dine listing request', function () {
    $response = $this->post(route('stay.dine.submit.store', [], false), [
        'type' => 'accommodation',
        'name' => 'Pulilan View Hotel',
        'category' => 'Hotel',
        'area' => 'Poblacion',
        'address' => '123 Main Street, Pulilan',
        'email' => 'owner@example.com',
        'phone' => '09171234567',
        'website' => 'https://example.com',
        'description' => 'A cozy stay for travelers visiting the town.',
    ]);

    $response->assertRedirect();
    $this->assertDatabaseHas('stay_dine_submissions', [
        'name' => 'Pulilan View Hotel',
        'type' => 'accommodation',
        'status' => 'pending',
    ]);
});
