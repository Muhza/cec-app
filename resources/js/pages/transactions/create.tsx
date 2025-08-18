import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Form, Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Transaction', href: '/transactions' },
    { title: 'Create', href: '/transactions/create' },
];

interface Service {
    id: number;
    name: string;
    unit: string;
    reference_item: string;
    fe: string;
}

interface Goods {
    id: number;
    name: string;
    unit: string;
    reference_item: string;
    fe: string;
}

interface Account {
    id: number;
    name: string;
}

export default function Create({ services, goods, accounts }: { services: Service[]; goods: Goods[]; accounts: Account[] }) {
    function calculationEmision(amount: number, fe: string, target: string) {
        const feValue = parseFloat(fe);
        if (isNaN(feValue) || feValue <= 0) {
            return 0;
        }
        const result = (amount * feValue).toFixed(8);
        document.getElementById(target)!.innerText = result.toString();
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create transaction" />
            <div className="p-4">
                <Form method="post" action={route('transactions.store')} className="space-y-6">
                    {({ errors, processing }) => (
                        <>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-border">
                                    <thead>
                                        <tr className="text-left">
                                            <td rowSpan={2}>Pengadaan Bahan Baku</td>
                                            <td rowSpan={2}>Ref #ID</td>
                                            {accounts.map((account) => (
                                                <td key={account.id} className="p-2 text-center" colSpan={3}>{account.name}</td>
                                            ))}
                                        </tr>
                                        <tr className="text-left">
                                            {accounts.map((account) => (
                                                <>
                                                    <td className="p-2">Jumlah Pembelian</td>
                                                    <td className="p-2">Unit</td>
                                                    <td className="p-2">Emisi GRK (tCO2e)</td>
                                                </>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {goods.map((good) => (
                                            <tr key={good.id} className="border-b">
                                                <td className="p-2">{good.name}</td>
                                                <td className="p-2">{good.reference_item}</td>
                                                {accounts.map((account) => (
                                                    <>
                                                        <td key={account.id} className="p-2">
                                                            <Input name={`goods[${good.id}][${account.id}][amount]`} type="number" step="0.01" onChange={(e) =>
    calculationEmision(
      parseFloat(e.target.value || "0"),
      good.fe || "0",
      `goods_${good.id}_${account.id}`
    )
  } />
                                                        </td>
                                                        <td className='p-2'>{good.unit}</td>
                                                        <td className='p-2' id={`goods_${good.id}_${account.id}`}>0</td>
                                                    </>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-border">
                                    <thead>
                                        <tr className="text-left">
                                            <td rowSpan={2}>Pengadaan Jasa</td>
                                            <td rowSpan={2}>Ref #ID</td>
                                            {accounts.map((account) => (
                                                <td key={account.id} className="p-2 text-center" colSpan={3}>{account.name}</td>
                                            ))}
                                        </tr>
                                        <tr className="text-left">
                                            {accounts.map((account) => (
                                                <>
                                                    <td className="p-2">Jumlah Pembelian (USD)</td>
                                                    <td className="p-2">Unit</td>
                                                    <td className="p-2">Emisi GRK (tCO2e)</td>
                                                </>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {services.map((service) => (
                                            <tr key={service.id} className="border-b">
                                                <td className="p-2">{service.name}</td>
                                                <td className="p-2">{service.reference_item}</td>
                                                {accounts.map((account) => (
                                                    <>
                                                        <td key={account.id} className="p-2">
                                                            <Input name={`services[${service.id}][${account.id}][amount]`} type="number" step="0.01" onChange={(e) =>
    calculationEmision(
      parseFloat(e.target.value || "0"),
      service.fe || "0",
      `services_${service.id}_${account.id}`
    )
  } />
                                                        </td>
                                                        <td className='p-2'>{service.unit}</td>
                                                        <td className='p-2' id={`services_${service.id}_${account.id}`}>0</td>
                                                    </>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Button disabled={processing}>Save</Button>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}

