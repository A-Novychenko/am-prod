import { ProductList } from '@/components/base';

export const SearchProducts = ({
  products,
  title,
  viewMode,
  isControlsOff,
  className,
}: {
  products: IASGProduct[];
  title: string;
  viewMode: GalleryViewMode;
  isControlsOff?: boolean;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h2 className="mb-8 text-[20px] font-bold">{title}</h2>

      <ProductList
        products={products}
        viewMode={viewMode}
        isControlsOff={isControlsOff}
      />

      {products && products.length >= 100 && (
        <>
          <div className="my-6 flex items-center justify-center gap-4 rounded-xl border border-yellow-400 bg-yellow-100 p-4 text-yellow-900">
            <div className="text-center">
              <p className="mb-1 text-[24px] font-bold">
                Показано лише перші 100 товарів
              </p>
              <p>
                Ваш запит повернув понад <strong>100 результатів</strong>, але
                для зручності відображено лише перші 100.
                <br />
                <span className="mt-1 block">
                  Для точнішого пошуку, будь ласка,{' '}
                  <strong>уточніть запит</strong>, додавши більше деталей
                  (наприклад, бренд, артикул або призначення).
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
