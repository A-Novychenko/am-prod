'use client';

import { MainBannerCard, Slider } from '@/components/ui';

export const MainBanner: React.FC<{ bannerProducts: IBannerProduct[] }> = ({
  bannerProducts,
}) => {
  return (
    <div>
      <Slider
        slidesData={bannerProducts}
        slideComponent={MainBannerCard}
        slideClassName=""
        wrapClassName="xl:w-[640px]"
      />
    </div>
  );
};
