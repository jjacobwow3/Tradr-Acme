import Image from 'next/image';
import { fetchFilteredCards } from '@/app/lib/data';
import { formatCurrency } from '@/app/lib/utils';
import { PkmnCard } from '../dashboard/pkmncard';
import { lusitana } from '../fonts';
import  styles from '@/app/ui/collection.module.css';

export default async function CardsTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const cards = await fetchFilteredCards(query, currentPage);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.cardContainer}>
                {/* CARD TEMPLATE */}
                {cards?.map((card) => (
                    <a href="https://www.reddit.com/">
                        <div
                        key={card.id}
                        className={styles.card}
                        >
                            <div className={styles.imageContainer}>
                                <img 
                                src={card.image}
                                alt={`${card.name} picture`}
                                height={100}
                                width={200}
                                ></img>
                            </div>
                            <div className={styles.textBox}>
                                <h3 className={styles.cardName}>{card.name}</h3>
                                <p>{card.set}</p>
                                <p>{card.code}</p>
                                <div className={styles.miniTextBox}>
                                    <p className={styles.price}>${card.price}</p>
                                    <p>Qty: {card.copies}</p>
                                </div>
                            </div>                         
                        </div>
                    </a>
                ))}
            </div>                
        </div>
    );
}
