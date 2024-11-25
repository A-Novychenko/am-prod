import { ProductCard } from '@/components/ui';

import { Product, ProductListProps } from './types';

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul className="flex flex-col flex-wrap gap-6 xl:flex-row smOnly:justify-center">
      {products &&
        products.map((product: Product) => (
          <li key={product._id} className="self-stretch">
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  );
};
