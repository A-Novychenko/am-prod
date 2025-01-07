'use client';

import { MainBannerCard, Slider, SliderArrow } from '@/components/ui';

export const MainBanner: React.FC<{ bannerProducts: IASGProduct[] }> = ({
  bannerProducts,
}) => {
  return (
    <div className="relative">
      <Slider
        slidesData={bannerProducts}
        slideComponent={MainBannerCard}
        slideClassName=""
        wrapClassName="xl:w-[724px] shadow-customLight rounded-2xl overflow-hidden h-full"
        section="main-banner"
      />

      <SliderArrow
        section="main-banner"
        wrapClassName="absolute bottom-1/2 left-0 z-[999] w-full px-6 smOnly:bottom-1/2 mdOnly:bottom-8"
      />
    </div>
  );
};
