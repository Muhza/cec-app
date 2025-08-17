import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

interface Service {
    id: number;
    name: string;
    unit: string;
    reference_item: string;
    fe: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Services', href: '/services' },
];

export default function Index({ services }: { services: Service[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Services" />
            <div className="p-4 space-y-4">
                <div className="flex justify-end">
                    <Button asChild>
                        <Link href={route('services.create')}>Add Service</Link>
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                        <thead>
                            <tr className="text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Unit</th>
                                <th className="p-2">Reference Item</th>
                                <th className="p-2">FE</th>
                                <th className="p-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service) => (
                                <tr key={service.id} className="border-b">
                                    <td className="p-2">{service.name}</td>
                                    <td className="p-2">{service.unit}</td>
                                    <td className="p-2">{service.reference_item}</td>
                                    <td className="p-2">{service.fe}</td>
                                    <td className="p-2 space-x-2">
                                        <Link
                                            href={route('services.edit', service.id)}
                                            className="text-blue-500"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={route('services.destroy', service.id)}
                                            method="delete"
                                            as="button"
                                            className="text-red-500"
                                        >
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

