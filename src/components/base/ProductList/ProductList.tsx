import { ProductCard } from '@/components/ui';

import { Product, ProductListProps } from './types';

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul className="flex flex-wrap gap-6">
      {products &&
        products.map((product: Product) => (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  );
};
