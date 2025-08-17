<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        return Inertia::render('services/index', [
            'services' => Service::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('services/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'unit' => ['required', 'string', 'max:255'],
            'reference_item' => ['required', 'string', 'max:255'],
            'fe' => ['required', 'numeric'],
        ]);

        Service::create($validated);

        return redirect()->route('services.index');
    }

    public function edit(Service $service)
    {
        return Inertia::render('services/edit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'unit' => ['required', 'string', 'max:255'],
            'reference_item' => ['required', 'string', 'max:255'],
            'fe' => ['required', 'numeric'],
        ]);

        $service->update($validated);

        return redirect()->route('services.index');
    }

    public function destroy(Service $service)
    {
        $service->delete();

        return redirect()->route('services.index');
    }
}

