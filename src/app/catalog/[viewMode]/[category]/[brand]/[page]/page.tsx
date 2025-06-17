// export const dynamic = 'force-dynamic';
// export const revalidate = 0;

import { notFound } from 'next/navigation';

import { CategoryList, ProductList } from '@/components/base';
import { BackBtn, Pagination } from '@/components/ui';

import { getCategories, getProducts } from '@/actions/servicesAPI';
import { getSlugId } from '@/utils';

import staticData from '@/data/common.json';

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    viewMode: GalleryViewMode;
    category: string;
    brand: string;
    page: string;
  }>;
}) {
  const { viewMode, category, brand, page } = await params;

  const defaultTypeGallery: GalleryViewMode =
    staticData.defaultTypeGallery as GalleryViewMode;

  const id = getSlugId(brand);

  const match = page.match(/^page-(\d+)$/);
  const pageNumber = match ? parseInt(match[1], 10) : 1;

  const res = await getProducts(id, pageNumber);

  if (!res || !res.products?.length || pageNumber > res.totalPages) {
    return notFound();
  }

  const { products, totalPages } = res;

  const categoryName = products[0]?.category;

  const initialViewMode = viewMode ? viewMode : defaultTypeGallery;

  let categories = [];

  if (!products.length) {
    categories = await getCategories(id);
  }

  return (
    <section className="section flex grow bg-mediumBg">
      {/* <div className="container flex  grow flex-col justify-between"> */}
      <div className="container">
        <h1 className="mb-10 text-[40px]">{categoryName}</h1>

        {products.length ? (
          <div className="flex flex-col">
            <ProductList viewMode={initialViewMode} products={products} />
            <Pagination
              totalPages={totalPages}
              brand={brand}
              category={category}
              page={pageNumber}
              viewMode={viewMode}
            />
          </div>
        ) : (
          <>
            <BackBtn className="mb-10 inline-block  rounded-[8px] bg-slate-50 px-4 py-2" />
            <CategoryList
              data={categories}
              link={`catalog/${initialViewMode}/${category}`}
              page="1"
            />
          </>
        )}
      </div>
    </section>
  );
}
