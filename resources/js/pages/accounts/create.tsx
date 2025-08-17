import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Form, Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Accounts', href: '/accounts' },
    { title: 'Create', href: '/accounts/create' },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Account" />
            <div className="p-4">
                <Form method="post" action={route('accounts.store')} className="space-y-6">
                    {({ errors, processing }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" />
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
