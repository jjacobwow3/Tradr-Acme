import { Card } from '@/app/ui/dashboard/cards';
import { PkmnCard } from '@/app/ui/dashboard/pkmncard';
import { lusitana } from '@/app/ui/fonts';
import { 
  fetchRevenue, 
  fetchLatestInvoices, 
  fetchCardData, 
  fetchPkmnCard
} from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  
  const {
    name,
    code,
    set,
    price,
    image,
  } = await fetchPkmnCard();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Collection
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <PkmnCard name={name} code={code} set={set} price={price} image={image} />
        <PkmnCard name={name} code={code} set={set} price={price} image={image} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      </div>
    </main>
  );
}