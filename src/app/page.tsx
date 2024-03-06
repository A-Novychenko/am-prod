import {
  AboutSection,
  CatalogSection,
  HeroSection,
  ShowCaseSection,
} from '@/sections';

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      <ShowCaseSection />

      <CatalogSection />

      <AboutSection />
    </>
  );
}
