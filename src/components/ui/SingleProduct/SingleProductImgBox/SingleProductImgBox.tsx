import {
  SingleProductClientSideImages,
  SingleProductImgCard,
} from '@/components/ui';

import { SingleProductImgProps } from './types';

export const SingleProductImgBox = ({ img, name }: SingleProductImgProps) => {
  if (!img || img.length < 1) {
    return (
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        <span className="text-lg text-gray-400">[Зображення недоступне]</span>
      </div>
    );
  }

  return (
    <div suppressHydrationWarning>
      <noscript>
        {/* Це гарантовано залишається при SSR навіть без JS */}

        <SingleProductImgCard url={img[0]} name={name} id={1} />
      </noscript>

      <SingleProductClientSideImages img={img} name={name} />
    </div>
  );
};
