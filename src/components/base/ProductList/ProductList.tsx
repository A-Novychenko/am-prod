import {
  BackBtn,
  ProductCardGallery,
  ProductCardList,
  ProductTypeGallerySwitcher,
} from '@/components/ui';

import { cn } from '@/utils';

import { ProductListProps } from './types';

import styles from './ProductList.module.css';

export const ProductList: React.FC<ProductListProps> = ({
  products,
  viewMode,
  isControlsOff = true,
}) => {
  return (
    <div className="h-full">
      {isControlsOff && (
        <div>
          <ProductTypeGallerySwitcher viewMode={viewMode}>
            <BackBtn />
          </ProductTypeGallerySwitcher>
        </div>
      )}

      <ul
        className={cn(
          'flex flex-col',
          {
            ' flex-wrap gap-2 md:flex-row smOnly:justify-center':
              viewMode === 'grid',
          },
          { ' gap-3': viewMode === 'list' },
        )}
      >
        {products &&
          products?.map((product: IASGProduct) => (
            <li
              key={product._id}
              className={viewMode === 'grid' ? styles.gridItem : ''}
            >
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
