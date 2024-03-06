import {
  AboutSection,
  CatalogSection,
  HeroSection,
  ShowCaseSection,
} from '@/sections';

export default async function Home() {
  return (
    <>
      <HeroSection />

      <ShowCaseSection />

      <CatalogSection />

      <AboutSection />
    </>
  );
}
