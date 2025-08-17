import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Form, Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Services', href: '/services' },
    { title: 'Create', href: '/services/create' },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Service" />
            <div className="p-4">
                <Form method="post" action={route('services.store')} className="space-y-6">
                    {({ errors, processing }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="unit">Unit</Label>
                                <Input id="unit" name="unit" />
                                <InputError message={errors.unit} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="reference_item">Reference Item</Label>
                                <Input id="reference_item" name="reference_item" />
                                <InputError message={errors.reference_item} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="fe">FE</Label>
                                <Input id="fe" name="fe" type="number" step="0.01" />
                                <InputError message={errors.fe} />
                            </div>
                            <Button disabled={processing}>Save</Button>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}

