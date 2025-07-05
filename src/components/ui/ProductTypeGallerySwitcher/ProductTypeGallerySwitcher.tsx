'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { RiGalleryView2, RiListCheck2 } from 'react-icons/ri';

import { ProductTypeGallerySwitcherProps } from './types';

export const ProductTypeGallerySwitcher: React.FC<
  ProductTypeGallerySwitcherProps
> = ({ children, viewMode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateViewSegment = (newView: GalleryViewMode) => {
    const segments = pathname.split('/');

    if (segments.length < 3) {
      console.warn('Некоректний шлях:', pathname);
      return;
    }

    // Змінюємо лише третій сегмент (індекс 2)
    segments[2] = newView;
    const newPath = segments.join('/');

    if (searchParams) {
      router.replace(`${newPath}?${searchParams}`);
    } else {
      router.replace(newPath);
    }
  };

  const handleSetGallery = () => {
    updateViewSegment('grid');
  };

  const handleSetList = () => {
    updateViewSegment('list');
  };

  return (
    <div className="mb-6 flex items-center justify-between">
      {children}

      <div className="hidden gap-2 md:flex">
        <button onClick={handleSetGallery}>
          <RiGalleryView2
            size={24}
            color={viewMode === 'grid' ? '#0045CB' : '#969696'}
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
  );
};
