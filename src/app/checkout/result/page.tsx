import { Suspense } from 'react';
import { Metadata } from 'next';

import { CartResult } from '@/components/ui';
import { generateStaticMetadata } from '@/utils';

export const metadata: Metadata = generateStaticMetadata('checkoutResult');

export default function CheckoutResultPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-4 text-center text-[24px]/normal font-bold">
          Дякуємо! Ваше замовлення успішно оформлено.
        </h1>

        <p className="mb-10">
          Ваше замовлення прийнято в обробку. Наш менеджер звʼяжеться з Вами
          найближчим часом. Будь ласка, перевірте цілісність і комплектацію
          товару під час отримання.
        </p>

        <Suspense>
          <CartResult />
        </Suspense>
      </div>
    </section>
  );
}
