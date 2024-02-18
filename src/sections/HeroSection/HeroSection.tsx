import { MainBanner, VinRequestForm } from '@/components/base';

export const HeroSection: React.FC = () => {
  return (
    <section className="section ">
      <div className="container">
        <div className="flex justify-between">
          <VinRequestForm />
          <MainBanner />
        </div>
      </div>
    </section>
  );
};
