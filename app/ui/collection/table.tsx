import Image from 'next/image';
import { fetchFilteredCards } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import { PkmnCard } from '../dashboard/pkmncard';
import { lusitana } from '../fonts';

export default async function CardsTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const cards = await fetchFilteredCards(query, currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <tbody className="bg-white">

                    {/* CARD TEMPLATE */}
                    {cards?.map((card) => (
                        <div
                        key={card.id}
                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                            <div className={`${lusitana.className}
                                    truncate rounded-xl bg-gray-600 px-4 py-8 text-center text-2xl`}>
                                <img src={card.image}></img>
                                <div className="flex p-4">
                                    <h3 className="ml-2 text-lg font-medium">{card.name}</h3>
                                    </div>
                                    <p className="ml-2 text-sm font-medium">
                                    {card.code} {card.set} ${card.price}
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </tbody>
            </div>                
        </div>
    );
}
