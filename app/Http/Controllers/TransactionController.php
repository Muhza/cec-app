<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Goods;
use App\Models\PurchGoodTransaction;
use App\Models\PurchServiceTransaction;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('transactions/create', [
            'services' => Service::all(),
            'accounts' => Account::all(),
            'goods' => Goods::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $transactionId = 'TRANS'. Carbon::now()->format('YmdHis');

        $inputServices = $request->services;
        $inputGoods = $request->goods;

        $services = Service::all();
        $goods = Goods::all();
        $accounts = Account::all();

        foreach($goods as $good) {
            foreach($accounts as $account) {
                $amount = $inputGoods[$good->id][$account->id]['amount'] ?? 0;
                $fe = $good->fe ?? 0;

                PurchGoodTransaction::create([
                    'trans_id' => $transactionId,
                    'account_id' => $account->id,
                    'purch_goods_id' => $good->id,
                    'qty' => $amount,
                    'qtyUnit' => $good->unit,
                    'emission' => $amount * $fe,
                ]);
            }
        }

        foreach($services as $service) {
            foreach($accounts as $account) {
                $amount = $inputServices[$service->id][$account->id]['amount'] ?? 0;
                $fe = $service->fe ?? 0;

                PurchServiceTransaction::create([
                    'trans_id' => $transactionId,
                    'account_id' => $account->id,
                    'purch_service_id' => $service->id,
                    'qty' => $amount,
                    'qtyUnit' => $service->unit,
                    'emission' => $amount * $fe,
                ]);
            }
        }

        return redirect()->route('transactions.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
