'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Product, ProductListProps } from './types';
import Link from 'next/link';
import {
  RiArrowGoBackFill,
  RiGalleryView2,
  RiListCheck2,
} from 'react-icons/ri';
import { cn } from '@/utils/cn';

const ProductCardGallery = dynamic(
  () => import('@/components/ui/ProductCardGallery'),
  {
    ssr: true,
  },
);
const ProductCardList = dynamic(
  () => import('@/components/ui/ProductCardList'),
  {
    ssr: true,
  },
);

export const ProductList: React.FC<ProductListProps> = ({
  products,
  category,
  categoryName,
}) => {
  const [viewMode, setViewMode] = useState('gallery'); // Початковий режим

  const handleSetGallery = () => {
    setViewMode('gallery');
  };

  const handleSetList = () => {
    setViewMode('list');
  };

  return (
    <div className="h-full">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/categories/${category}`}
          className="flex gap-2 rounded-[8px] bg-slate-50 px-4 py-2"
        >
          <RiArrowGoBackFill size={16} />
          {categoryName}
        </Link>

        <div className="flex gap-2">
          <button onClick={handleSetGallery}>
            <RiGalleryView2
              size={24}
              color={viewMode === 'gallery' ? '#0045CB' : '#969696'}
            />
          </button>

          <button onClick={handleSetList}>
            <RiListCheck2
              size={24}
              color={viewMode === 'list' ? '#0045CB' : '#969696'}
            />
          </button>
        </div>
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
          products.map((product: Product) => (
            <li key={product._id}>
              {viewMode === 'gallery' ? (
                <ProductCardGallery product={product} />
              ) : (
                <ProductCardList product={product} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
