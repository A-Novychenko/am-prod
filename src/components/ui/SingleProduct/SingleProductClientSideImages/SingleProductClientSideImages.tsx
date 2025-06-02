'use client';

import { SingleProductImgCard, Slider, SliderArrow } from '@/components/ui';

import { SingleProductClientSideImagesProps } from './types';

export const SingleProductClientSideImages = ({
  img,
  name,
}: SingleProductClientSideImagesProps) => {
  if (!img || img.length < 1) return null;

  const imgData = img.map((el, idx) => {
    return { url: el, id: idx, name };
  });

  if (img.length === 1) {
    return <SingleProductImgCard url={img[0]} name={name} id={1} />;
  }

  return (
    <div className="relative">
      <Slider
        section="single-page"
        slidesData={imgData}
        slideComponent={SingleProductImgCard}
      />

      <SliderArrow
        section="single-page"
        wrapClassName="absolute top-1/2 -translate-y-1/2 w-full z-40"
      />
    </div>
  );
};
