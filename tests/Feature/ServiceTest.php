<?php

namespace Tests\Feature;

use App\Models\Service;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServiceTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_login()
    {
        $this->get('/services')->assertRedirect('/login');
    }

    public function test_authenticated_users_can_crud_services()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $this->post('/services', [
            'name' => 'Test Service',
            'unit' => 'unit',
            'reference_item' => 'item',
            'fe' => 1.23,
        ])->assertRedirect('/services');

        $service = Service::first();

        $this->put("/services/{$service->id}", [
            'name' => 'Updated Service',
            'unit' => 'unit',
            'reference_item' => 'item',
            'fe' => 2.34,
        ])->assertRedirect('/services');

        $this->delete("/services/{$service->id}")->assertRedirect('/services');

        $this->assertDatabaseCount('services', 0);
    }
}

