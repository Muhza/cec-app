import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Form, Head } from '@inertiajs/react';

interface Account {
    id: number;
    name: string;
}

export default function Edit({ account }: { account: Account }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Accounts', href: '/accounts' },
        { title: account.name, href: `/accounts/${account.id}/edit` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${account.name}`} />
            <div className="p-4">
                <Form method="put" action={route('accounts.update', account.id)} className="space-y-6">
                    {({ errors, processing }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" defaultValue={account.name} />
                                <InputError message={errors.name} />
                            </div>
                            <Button disabled={processing}>Save</Button>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
