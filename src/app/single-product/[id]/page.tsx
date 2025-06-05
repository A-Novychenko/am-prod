export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { CastrolSeoSection, SingleProductSection } from '@/sections';

import { getProductData } from '@/actions/servicesAPI';
import Link from 'next/link';

export default async function SingleProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  let product: IASGProduct | null = null;

  try {
    product = await getProductData(id);
  } catch (error) {
    console.error('Помилка отримання продукту:', error);
  }

  if (!product) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Товар не знайдено
          </h1>
          <p className="text-gray-500">
            Спробуйте перевірити правильність посилання або поверніться на{' '}
            <Link href="/" className="text-blue-700">
              головну сторінку
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <h1 className="visually-hidden">{product.name}</h1>

      <SingleProductSection product={product} />

      {product.brand.toLowerCase().includes('castrol') && <CastrolSeoSection />}
    </>
  );
}
