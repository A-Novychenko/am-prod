import { Metadata } from 'next';

import { SearchProducts } from '@/components/ui';

import { getProductsByTecDocArticle } from '@/actions/servicesAPI';

import staticData from '@/data/common.json';
import { generateStaticMetadata } from '@/utils';
import { makeSearchStructuredData } from '@/utils/makeMeta/makeSearchStructuredData';

export const metadata: Metadata = generateStaticMetadata('searchProducts');

export default async function SearchProductPage({
  searchParams,
}: {
  searchParams: Promise<{ searchQuery: string; typeGallery: GalleryViewMode }>;
}) {
  const { searchQuery, typeGallery } = await searchParams;

  const defaultTypeGallery: GalleryViewMode =
    staticData.defaultTypeGallery as GalleryViewMode;

  const { products } = await getProductsByTecDocArticle(searchQuery);

  const initialViewMode = typeGallery ? typeGallery : defaultTypeGallery;

  return (
    <>
      {products?.length > 0 && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              makeSearchStructuredData(searchQuery, products),
            ),
          }}
        />
      )}

      <section className="section ">
        <div className="container">
          <h1 className="mb-4 text-[24px]">Пошук товарів</h1>

          <SearchProducts products={products} viewMode={initialViewMode} />
        </div>
      </section>
    </>
  );
}
