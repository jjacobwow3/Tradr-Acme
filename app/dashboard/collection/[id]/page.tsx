import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCardById } from '@/app/lib/data';
import { Suspense } from 'react';

 
export default async function Page({ params }: { params: { id: string; } }) {
    const { id } = params;    
    const card = await fetchCardById(id);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Collection', href: '/dashboard/collection' },
                    {
                        label: `${card.name}`, 
                        href: `/dashboard/collection/${id}`,
                        active: true,
                    },
                ]}
            />
            <img 
                src={card.image} 
                alt={`${card.name} image`} 
                width={'400'}
            />
            <h1>{card.name}</h1>
            <p>{card.set} {card.code}</p>
            <p>${card.price} Qty: {card.copies}</p>
        </main>
    );
}