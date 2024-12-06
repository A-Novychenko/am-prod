import { MainBanner, VinRequestForm } from '@/components/base';

import { getBannerProducts } from '@/actions/servicesAPI';

export const HeroSection: React.FC = async () => {
  const { products } = await getBannerProducts();

  return (
    <section className="section ">
      <div className="container">
        <div className="justify-between xl:flex">
          <VinRequestForm />

          <MainBanner bannerProducts={products} />
        </div>
      </div>
    </section>
  );
};
