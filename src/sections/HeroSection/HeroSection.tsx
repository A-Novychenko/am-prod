import { MainBanner, VinRequestMainCard } from '@/components/base';

import { getBannerProducts } from '@/actions/servicesAPI';
import { cn } from '@/utils';
import Image from 'next/image';

export const HeroSection: React.FC = async () => {
  const res = await getBannerProducts();

  const products = res ? res?.products : [];

  return (
    <section className={cn('bg-mediumBg py-4')}>
      <div className="container">
        <div className="justify-between  xl:flex">
          <VinRequestMainCard />

          {products && products.length > 0 ? (
            <MainBanner bannerProducts={products} />
          ) : (
            <div className="hidden shrink-0 overflow-hidden rounded-2xl bg-darkBg shadow-customLight xl:block xl:h-[480px] xl:w-[724px]">
              <Image
                src="/images/logo.png"
                alt="Логотип інтернет-магизину"
                width={1200}
                height={630}
                className="size-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
