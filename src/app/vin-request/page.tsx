'use client';

import { VinRequestForm } from '@/components/base';

import { cn } from '@/utils';

export default function VinRequestPage() {
  return (
    <section className={cn('bg-mediumBg py-4')}>
      <div className="container">
        <VinRequestForm />
      </div>
    </section>
  );
}
