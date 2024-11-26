export const dynamic = 'force-dynamic';

import Link from 'next/link';

import { ProductList } from '@/components/base';
import { Pagination } from '@/components/ui';

import { getProducts } from '@/actions/servicesAPI';

export default async function ProductPage({
  params: { product, category },
  searchParams,
}: {
  params: { product: string; category: string };
  searchParams: { page?: string; name: string; nameCat: string };
}) {
  const page = parseInt(searchParams.page || '1', 10);
  const { products, totalPages } = await getProducts(product, page);

  return (
    <section className="section flex grow bg-slate-500">
      <div className="container flex  grow flex-col justify-between">
        <div>
          <Link
            href={`/categories/${category}`}
            className="mb-10 inline-block rounded-[8px] bg-slate-50 px-4 py-2"
          >
            {`Повернутись в ${searchParams.nameCat}`}
          </Link>

          <h1 className="mb-10 text-[40px]">{searchParams.name}</h1>
        </div>

        {products && <ProductList products={products} />}

        <Pagination
          totalPages={totalPages}
          product={product}
          category={category}
          page={page}
          name={searchParams.name}
        />
      </div>
    </section>
  );
}
