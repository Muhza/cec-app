<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        return Inertia::render('accounts/index', [
            'accounts' => Account::all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('accounts/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        Account::create($validated);

        return redirect()->route('accounts.index');
    }

    public function edit(Account $account)
    {
        return Inertia::render('accounts/edit', [
            'account' => $account,
        ]);
    }

    public function update(Request $request, Account $account)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $account->update($validated);

        return redirect()->route('accounts.index');
    }

    public function destroy(Account $account)
    {
        $account->delete();

        return redirect()->route('accounts.index');
    }
}

