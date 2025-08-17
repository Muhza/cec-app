<?php

namespace Database\Factories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServiceFactory extends Factory
{
    protected $model = Service::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'unit' => $this->faker->word(),
            'reference_item' => $this->faker->word(),
            'fe' => $this->faker->randomFloat(2, 0, 100),
        ];
    }
}

