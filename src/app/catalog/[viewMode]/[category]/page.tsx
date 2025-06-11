export const dynamic = 'force-dynamic';

import Link from 'next/link';

import { CategoryList } from '@/components/base';

import { getCategories, getCategory } from '@/actions/servicesAPI';
import { cn, getSlugId } from '@/utils';

import staticData from '@/data/common.json';

export default async function CategoryPage({
  params: { viewMode, category },
}: {
  params: { viewMode: string; category: string };
}) {
  const { defaultTypeGallery } = staticData;
  const initialViewMode = viewMode ? viewMode : defaultTypeGallery;

  const id = getSlugId(category);

  const categories = await getCategories(id);

  const res = await getCategory(id);
  const prevCategoryName = res?.name ? res?.name : '';

  return (
    <>
      <section className="section bg-mediumBg">
        <div className="container">
          <h1
            className={cn('mb-10 text-[40px]', {
              'visually-hidden': !prevCategoryName,
            })}
          >
            {prevCategoryName ? prevCategoryName : 'Галерея категорій'}
          </h1>

          <Link
            href="/#main-cat"
            className="mb-10 inline-block  rounded-[8px] bg-slate-50 px-4 py-2"
          >
            Перейти до всіх категорій
          </Link>

          <CategoryList
            data={categories}
            link={`catalog/${initialViewMode}/${category}`}
            page="1"
          />
        </div>
      </section>
    </>
  );
}
