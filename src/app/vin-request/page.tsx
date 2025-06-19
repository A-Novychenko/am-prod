import { Metadata } from 'next';

import { VinRequestForm } from '@/components/base';

import { generateStaticMetadata, makeVinStructuredData } from '@/utils';

export const metadata: Metadata = generateStaticMetadata('vinRequest');

export default function VinRequestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(makeVinStructuredData),
        }}
      />
      <section className="py-4">
        <div className="container">
          <VinRequestForm />
        </div>
      </section>
    </>
  );
}
