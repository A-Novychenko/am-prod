import { Metadata } from 'next';

import { SearchProducts } from '@/components/ui';
import { VinRequestForm } from '@/components/base';

import { searchProducts } from '@/actions/servicesAPI';
import { generateStaticMetadata, makeSearchStructuredData } from '@/utils';

import staticData from '@/data/common.json';

export const metadata: Metadata = generateStaticMetadata('searchProducts');

export default async function SearchProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ searchQuery: string; viewMode: GalleryViewMode }>;
  searchParams: Promise<{ searchQuery: string }>;
}) {
  const { viewMode } = await params;
  const { searchQuery } = await searchParams;

  const defaultTypeGallery: GalleryViewMode =
    staticData.defaultTypeGallery as GalleryViewMode;
  const initialViewMode = viewMode ? viewMode : defaultTypeGallery;

  const res = await searchProducts(searchQuery);

  const { exactProducts, relatedProducts } = res;

  const exactProductsQty =
    typeof exactProducts?.length === 'number' ? exactProducts?.length : 0;
  const relatedProductsQty =
    typeof relatedProducts?.length === 'number' ? relatedProducts?.length : 0;
  const qty = exactProductsQty + relatedProductsQty;
  const hasProducts = qty > 0 ? true : false;
  const hasExactProducts = exactProductsQty > 0 ? true : false;
  const hasRelatedProducts = relatedProductsQty > 0 ? true : false;

  return (
    <>
      {exactProducts?.length > 0 ||
        (relatedProducts?.length > 0 && (
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                makeSearchStructuredData(searchQuery, [
                  ...exactProducts,
                  ...relatedProducts,
                ]),
              ),
            }}
          />
        ))}

      <section className="section bg-mediumBg">
        <div className="container">
          <h1 className="visually-hidden">Пошук товарів</h1>

          <div className="text-[20px] font-bold">
            {hasProducts ? (
              <span className="mb-4 inline-block">
                {' '}
                {`Знайдено всього товарів: ${qty}`}
              </span>
            ) : (
              <>
                <p className="mb-10 text-center text-[32px] font-bold text-red">
                  Нічого не знайдено, наші фахівці спробують підібрати Вам
                  варіанти, якщо Ви заповните форму нижче.
                </p>

                <p className="mb-4 text-gray-600">
                  Можливо, Ви ввели неточну назву, артикул або бренд. Спробуйте
                  змінити запит або скористайтеся підбором за VIN-кодом — наші
                  фахівці допоможуть знайти необхідні запчастини точно та
                  швидко.
                </p>
                <b className="mb-4">
                  Заповніть коротку форму нижче — і ми звʼяжемося з Вами з
                  найкращими варіантами.
                </b>

                <VinRequestForm
                  isPage
                  hideTitle
                  formClassName={'shadow-customLight bg-lightBg/40'}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {hasExactProducts && (
        <section className="section bg-mediumBg">
          <div className="container">
            <SearchProducts
              title={'Знайдено за артикулом'}
              products={exactProducts}
              viewMode={initialViewMode}
              isControlsOff={true}
              className="rounded-[12px]"
            />
          </div>
        </section>
      )}

      {hasRelatedProducts && (
        <section className="section bg-mediumBg/50">
          <div className="container">
            <SearchProducts
              title={
                hasExactProducts
                  ? 'Інші товари за запитом'
                  : 'Знайдено за запитом'
              }
              products={relatedProducts}
              viewMode={initialViewMode}
              isControlsOff={hasExactProducts ? false : true}
              className="rounded-[12px]"
            />
          </div>
        </section>
      )}
    </>
  );
}
