<?php

namespace App\Http\Controllers;

use App\Models\Goods;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GoodsController extends Controller
{
    /**
     * Display a listing of the goods.
     */
    public function index(): Response
    {
        return Inertia::render('goods/index', [
            'goods' => Goods::all(),
        ]);
    }

    /**
     * Store a newly created good in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'unit' => ['required', 'string', 'max:255'],
            'fe' => ['required', 'numeric'],
        ]);

        Goods::create($validated);

        return redirect()->route('goods.index');
    }

    /**
     * Update the specified good in storage.
     */
    public function update(Request $request, Goods $goods): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'unit' => ['required', 'string', 'max:255'],
            'fe' => ['required', 'numeric'],
        ]);

        $goods->update($validated);

        return redirect()->route('goods.index');
    }

    /**
     * Remove the specified good from storage.
     */
    public function destroy(Goods $goods): RedirectResponse
    {
        $goods->delete();

        return redirect()->route('goods.index');
    }
}

