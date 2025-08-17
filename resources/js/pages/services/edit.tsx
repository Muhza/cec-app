import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Form, Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

interface Service {
    id: number;
    name: string;
    unit: string;
    reference_item: string;
    fe: string;
}

export default function Edit({ service }: { service: Service }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Services', href: '/services' },
        { title: service.name, href: `/services/${service.id}/edit` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit ${service.name}`} />
            <div className="p-4">
                <Form method="put" action={route('services.update', service.id)} className="space-y-6">
                    {({ errors, processing }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" defaultValue={service.name} />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="unit">Unit</Label>
                                <Input id="unit" name="unit" defaultValue={service.unit} />
                                <InputError message={errors.unit} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="reference_item">Reference Item</Label>
                                <Input
                                    id="reference_item"
                                    name="reference_item"
                                    defaultValue={service.reference_item}
                                />
                                <InputError message={errors.reference_item} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="fe">FE</Label>
                                <Input
                                    id="fe"
                                    name="fe"
                                    type="number"
                                    step="0.01"
                                    defaultValue={service.fe}
                                />
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

