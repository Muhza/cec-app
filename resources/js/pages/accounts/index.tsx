import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Account {
    id: number;
    name: string;
}

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Accounts', href: '/accounts' }];

export default function Index({ accounts }: { accounts: Account[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="space-y-4 p-4">
                <div className="flex justify-end">
                    <Button asChild>
                        <Link href={route('accounts.create')}>Add Account</Link>
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account) => (
                                <tr key={account.id} className="border-b">
                                    <td className="p-2">{account.name}</td>
                                    <td className="space-x-2 p-2">
                                        <Link href={route('accounts.edit', account.id)} className="text-blue-500">
                                            Edit
                                        </Link>
                                        <Link href={route('accounts.destroy', account.id)} method="delete" as="button" className="text-red-500">
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
