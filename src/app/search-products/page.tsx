import { SearchProducts } from '@/components/ui';

import { getProductsByTecDocArticle } from '@/actions/servicesAPI/getProductsByTecDocArticle';

export default async function SearchProductPage({
  searchParams: { searchQuery, typeGallery },
}: {
  searchParams: { searchQuery: string; typeGallery: 'list' | 'gallery' };
}) {
  const { products } = await getProductsByTecDocArticle(searchQuery);

  const initialViewMode = typeGallery ? typeGallery : 'list';

  return (
    <section className="section ">
      <div className="container">
        <h1 className="mb-4 text-[24px]">Пошук товарів</h1>

        <SearchProducts products={products} viewMode={initialViewMode} />
      </div>
    </section>
  );
}
