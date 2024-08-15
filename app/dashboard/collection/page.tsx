import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { PkmnCard } from '@/app/ui/dashboard/pkmncard';
import Table from '@/app/ui/collection/table';
import { fetchCollectionPages, fetchFilteredCards, fetchPkmnCard } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCollectionPages(query);
 
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`text-2xl`}>Collection</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search collection..." />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
