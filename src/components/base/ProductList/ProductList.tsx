import Link from 'next/link';

import { RiArrowGoBackFill } from 'react-icons/ri';

import {
  ProductCardGallery,
  ProductCardList,
  ProductTypeGallerySwitcher,
} from '@/components/ui';

import { cn } from '@/utils/cn';

import { ProductListProps } from './types';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  categoryName,
  viewMode,
  backLink = true,
}) => {
  return (
    <div className="h-full">
      <div className={cn({ 'flex justify-end': !backLink })}>
        <ProductTypeGallerySwitcher>
          {backLink && (
            <Link
              href={`/categories/${category}`}
              className="flex gap-2 rounded-[8px] bg-slate-50 px-4 py-2"
            >
              <RiArrowGoBackFill size={16} />
              {categoryName}
            </Link>
          )}
        </ProductTypeGallerySwitcher>
      </div>

      <ul
        className={cn(
          'flex flex-col',
          {
            ' flex-wrap gap-2 xl:flex-row smOnly:justify-center':
              viewMode === 'gallery',
          },
          { ' gap-3': viewMode === 'list' },
        )}
      >
        {products &&
          products.map((product: ASGProduct) => (
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
