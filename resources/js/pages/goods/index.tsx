import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Form, Head, Link } from '@inertiajs/react';

interface Goods {
    id: number;
    name: string;
    unit: string;
    fe: string;
}

interface GoodsPageProps {
    goods: Goods[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Goods',
        href: '/goods',
    },
];

export default function GoodsIndex({ goods }: GoodsPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Goods" />
            <div className="flex flex-col gap-8 p-4">
                <Form method="post" action={route('goods.store')} className="space-y-4">
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" placeholder="Name" />
                                <InputError className="mt-2" message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="unit">Unit</Label>
                                <Input id="unit" name="unit" placeholder="Unit" />
                                <InputError className="mt-2" message={errors.unit} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="fe">FE</Label>
                                <Input id="fe" name="fe" type="number" step="0.000001" placeholder="FE" />
                                <InputError className="mt-2" message={errors.fe} />
                            </div>
                            <Button disabled={processing}>Create</Button>
                        </>
                    )}
                </Form>

                <div className="space-y-4">
                    {goods.map((good) => (
                        <Form
                            key={good.id}
                            method="put"
                            action={route('goods.update', good.id)}
                            className="flex flex-wrap items-end gap-2"
                        >
                            {({ processing }) => (
                                <>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`name-${good.id}`} className="sr-only">
                                            Name
                                        </Label>
                                        <Input
                                            id={`name-${good.id}`}
                                            name="name"
                                            defaultValue={good.name}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`unit-${good.id}`} className="sr-only">
                                            Unit
                                        </Label>
                                        <Input
                                            id={`unit-${good.id}`}
                                            name="unit"
                                            defaultValue={good.unit}
                                            placeholder="Unit"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor={`fe-${good.id}`} className="sr-only">
                                            FE
                                        </Label>
                                        <Input
                                            id={`fe-${good.id}`}
                                            name="fe"
                                            defaultValue={good.fe}
                                            type="number"
                                            step="0.000001"
                                            placeholder="FE"
                                        />
                                    </div>
                                    <Button size="sm" disabled={processing}>
                                        Update
                                    </Button>
                                    <Button variant="destructive" size="sm" asChild>
                                        <Link href={route('goods.destroy', good.id)} method="delete" as="button">
                                            Delete
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </Form>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

