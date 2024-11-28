export const dynamic = 'force-dynamic';

import { ProductList } from '@/components/base';
import { Pagination } from '@/components/ui';

import { getCategory, getProducts } from '@/actions/servicesAPI';

export default async function ProductPage({
  params: { product, category },
  searchParams,
}: {
  params: { product: string; category: string };
  searchParams: { page?: string; name: string; nameCat: string };
}) {
  const page = parseInt(searchParams.page || '1', 10);
  const { products, totalPages } = await getProducts(product, page);

  const res = await getCategory(category);

  const categoryName = products[0]?.category;
  const prevCategoryName = res?.name ? res?.name : '';

  const initialViewMode = 'gallery';

  return (
    <section className="section flex grow bg-mediumBg">
      <div className="container flex  grow flex-col justify-between">
        <h1 className="mb-10 text-[40px]">{categoryName}</h1>

        {products && (
          <ProductList
            viewMode={initialViewMode}
            products={products}
            category={category}
            categoryName={prevCategoryName}
          />
        )}

        <Pagination
          totalPages={totalPages}
          product={product}
          category={category}
          page={page}
          name={categoryName}
        />
      </div>
    </section>
  );
}
