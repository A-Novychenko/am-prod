// import Link from 'next/link';

// import { RiArrowGoBackFill } from 'react-icons/ri';

import {
  BackBtn,
  ProductCardGallery,
  ProductCardList,
  ProductTypeGallerySwitcher,
} from '@/components/ui';

import { cn } from '@/utils';

import { ProductListProps } from './types';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  viewMode,
}) => {
  return (
    <div className="h-full">
      <div>
        <ProductTypeGallerySwitcher viewMode={viewMode}>
          <BackBtn />
        </ProductTypeGallerySwitcher>
      </div>

      <ul
        className={cn(
          'flex flex-col',
          {
            ' flex-wrap gap-2 xl:flex-row smOnly:justify-center':
              viewMode === 'grid',
          },
          { ' gap-3': viewMode === 'list' },
        )}
      >
        {products &&
          products?.map((product: IASGProduct) => (
            <li key={product._id}>
              {viewMode === 'list' ? (
                <>
                  <div className="block xl:hidden">
                    <ProductCardGallery product={product} />
                  </div>

                  <div className="hidden xl:block">
                    <ProductCardList product={product} />
                  </div>
                </>
              ) : (
                <ProductCardGallery product={product} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
