import { MainBanner, VinRequestForm } from '@/components/base';

export const HeroSection: React.FC = () => {
  return (
    <section className="section ">
      <div className="container">
        <div className="justify-between xl:flex">
          <VinRequestForm />

          <MainBanner />
        </div>
      </div>
    </section>
  );
};
