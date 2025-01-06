'use client';

import { MainBannerCard, Slider } from '@/components/ui';

export const MainBanner: React.FC<{ bannerProducts: ASGProduct[] }> = ({
  bannerProducts,
}) => {
  return (
    <div>
      <Slider
        slidesData={bannerProducts}
        slideComponent={MainBannerCard}
        slideClassName=""
        wrapClassName="xl:w-[724px] shadow-customLight rounded-2xl overflow-hidden h-full"
      />
    </div>
  );
};
