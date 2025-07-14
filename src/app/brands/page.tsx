import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getBrandsCategories } from '@/actions/servicesAPI';
import { generateSlugName } from '@/utils';

export const revalidate = 86400; // 86400 секунд = 24 часа

type BrandItemType = {
  _id: string;
  id: number;
  createdAt: string;
  hasChildren: boolean;
  hasProducts: boolean;
  img: string;
  margin: number;
  name: string;
  parent_id: number;
  updatedAt: string;
};

export default async function BrandsPage() {
  const brands: BrandItemType[] = await getBrandsCategories();

  const mainCategories = brands.filter(el => el.parent_id === 0);
  const allowedParentIds = mainCategories.map(el => el.id);

  const availableBrands = brands.filter(
    b => b.hasProducts && allowedParentIds.includes(b.parent_id),
  );

  if (!availableBrands.length) return notFound();

  return (
    <section className="section bg-lightBg">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold text-secondaryText">
          Бренди
        </h1>

        <div className="lg:grid-cols-5 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {availableBrands.map((brand: BrandItemType) => {
            const mainCat = mainCategories.find(
              el => el.id === brand.parent_id,
            );

            if (!mainCat) return;

            const mainCatName = generateSlugName(mainCat.name);
            const mainCatId = mainCat.id;

            return (
              <Link
                key={brand.id}
                href={`/catalog/grid/${mainCatName}--${mainCatId}/${brand.name}--${brand.id}/page-1`}
                className="group block rounded-xl bg-white p-4 shadow transition hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.img || 'meta/og-image.jpg'}
                  alt={brand.name}
                  className="mx-auto mb-3 h-16 object-contain"
                />
                <p className="text-center text-sm font-medium text-gray-800 group-hover:text-secondaryText">
                  {brand.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
