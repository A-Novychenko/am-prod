import Link from 'next/link';

import { RiArrowGoBackFill } from 'react-icons/ri';

import {
  ProductCardGallery,
  ProductCardList,
  ProductTypeGallerySwitcher,
} from '@/components/ui';

import { cn } from '@/utils';

import { ProductListProps } from './types';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  prevCategoryName,
  viewMode,
  backLink = true,
}) => {
  return (
    <div className="h-full">
      <div className={cn({ 'flex justify-end': !backLink })}>
        <ProductTypeGallerySwitcher viewMode={viewMode}>
          {backLink && (
            <Link
              href={`/catalog/${viewMode}/${category}`}
              className="flex gap-2 rounded-[8px] bg-slate-50 px-4 py-2"
            >
              <RiArrowGoBackFill size={16} />
              {prevCategoryName}
            </Link>
          )}
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
          products.map((product: IASGProduct) => (
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
