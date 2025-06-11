export const dynamic = 'force-dynamic';

import { ProductList } from '@/components/base';
import { Pagination } from '@/components/ui';

import { getCategory, getProducts } from '@/actions/servicesAPI';
import { getSlugId } from '@/utils';

import staticData from '@/data/common.json';

export default async function ProductPage({
  params: { viewMode, category, brand, page },
}: {
  params: {
    viewMode: GalleryViewMode;
    category: string;
    brand: string;
    page: string;
  };
}) {
  const defaultTypeGallery: GalleryViewMode =
    staticData.defaultTypeGallery as GalleryViewMode;

  const id = getSlugId(brand);

  const match = page.match(/^page-(\d+)$/);
  const pageNumber = match ? parseInt(match[1], 10) : 1;

  const { products, totalPages } = await getProducts(id, pageNumber);
  const categoryName = products[0]?.category;

  const res = await getCategory(id);
  const prevCategoryName = res?.parentName ? res?.parentName : '';

  const initialViewMode = viewMode ? viewMode : defaultTypeGallery;

  return (
    <section className="section flex grow bg-mediumBg">
      <div className="container flex  grow flex-col justify-between">
        <h1 className="mb-10 text-[40px]">{categoryName}</h1>

        {products && (
          <ProductList
            viewMode={initialViewMode}
            products={products}
            category={category}
            prevCategoryName={prevCategoryName}
          />
        )}

        <Pagination
          totalPages={totalPages}
          brand={brand}
          category={category}
          page={pageNumber}
          viewMode={viewMode}
        />
      </div>
    </section>
  );
}
