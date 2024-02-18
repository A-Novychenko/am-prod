'use client';

import { MainBannerCard, Slider } from '@/components/ui';

import mainBannerData from '@/data/mainBanner.json';

export const MainBanner: React.FC = () => {
  return (
    <div>
      <Slider
        slidesData={mainBannerData}
        slideComponent={MainBannerCard}
        slideClassName=""
        wrapClassName="w-[640px]"
      />
    </div>
  );
};
