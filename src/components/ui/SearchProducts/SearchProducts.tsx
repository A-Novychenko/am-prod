import { ProductList } from '@/components/base';

export const SearchProducts = ({
  products,
  viewMode,
}: {
  products: ASGProduct[];
  viewMode: 'list' | 'gallery';
}) => {
  return (
    <>
      <p className="text-[20px]">
        {products && products.length > 0
          ? `Знайдено: ${products.length}`
          : 'Нічого не знайдено'}
      </p>

      <ProductList
        products={products}
        category={'test'}
        categoryName={'test'}
        viewMode={viewMode}
        backLink={false}
      />
    </>
  );
};
