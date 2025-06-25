export const revalidate = 3600;

import { AboutSection, CatalogSection, HeroSection } from '@/sections';

import { makeHomeStructuredData } from '@/utils';

export default async function HomePage() {
  const structuredData = makeHomeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection />

      <CatalogSection />

      <AboutSection />
    </>
  );
}
