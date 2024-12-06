import { AboutSection, CatalogSection, HeroSection } from '@/sections';

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      <CatalogSection />

      <AboutSection />
    </>
  );
}
