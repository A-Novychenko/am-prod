'use client';

import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { RiGalleryView2, RiListCheck2 } from 'react-icons/ri';

import { ProductTypeGallerySwitcherProps } from './types';

export const ProductTypeGallerySwitcher: React.FC<
  ProductTypeGallerySwitcherProps
> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const viewMode =
    searchParams.get('typeGallery') === 'list' ||
    searchParams.get('typeGallery') === 'gallery'
      ? searchParams.get('typeGallery')
      : 'list';

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleSetGallery = () => {
    router.push(pathname + '?' + createQueryString('typeGallery', 'gallery'));
  };

  const handleSetList = () => {
    router.push(pathname + '?' + createQueryString('typeGallery', 'list'));
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      {children}

      <div className="hidden gap-2 xl:flex">
        <button onClick={handleSetList}>
          <RiListCheck2
            size={24}
            color={viewMode === 'list' ? '#0045CB' : '#969696'}
          />
        </button>

        <button onClick={handleSetGallery}>
          <RiGalleryView2
            size={24}
            color={viewMode === 'gallery' ? '#0045CB' : '#969696'}
          />
        </button>
      </div>
    </div>
  );
};
