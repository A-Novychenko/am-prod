import { ProductList } from '@/components/base';

import { getTopProducts } from '@/actions/servicesAPI';

export const PopularProductsSection = async () => {
  const products = await getTopProducts();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="section bg-mediumBg">
      <div className="container">
        <h2 className="mb-10 text-[24px]/normal font-bold">
          Найпопулярніші товари цього місяця
        </h2>

        {products && (
          <ProductList
            products={products}
            viewMode={'grid'}
            isControlsOff={false}
          />
        )}
      </div>
    </section>
  );
};
