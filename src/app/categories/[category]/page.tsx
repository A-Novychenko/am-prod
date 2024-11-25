export const dynamic = 'force-dynamic';

import Link from 'next/link';

import { CategoryList } from '@/components/base';

import { getCategories } from '@/actions/servicesAPI';

export default async function CategoryPage({
  params: { category },
  searchParams,
}: {
  params: { product: string; category: string };
  searchParams: { page?: string; name: string };
}) {
  console.log('categoryID', category);
  const categories = await getCategories(category);

  return (
    <>
      <section className="section bg-slate-500">
        <div className="container">
          <Link
            href="/#main-cat"
            className="mb-10 inline-block  rounded-[8px] bg-slate-50 px-4 py-2"
          >
            До всіх категорій
          </Link>
          <h1 className="mb-10 text-[40px]">{searchParams.name}</h1>

          <CategoryList
            data={categories}
            path={`${category}`}
            nameCat={searchParams.name}
          />
        </div>
      </section>
    </>
  );
}
