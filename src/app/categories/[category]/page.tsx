export const dynamic = 'force-dynamic';

import { getCategories } from '@/actions/servicesAPI';
import { CategoryList } from '@/components/base';
import Link from 'next/link';

// type Category = {
//   id: string;
//   name: string;
//   parent_id: number;
// };

// export async function generateStaticParams() {
//   const categories = await getMainCategories();

//   return (
//     categories?.map((category: Category) => {
//       return {
//         category: category.id.toString(),
//       };
//     }) || []
//   );
// }

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  console.log('categoryID', category);
  const categories = await getCategories(category);

  // console.log('categories', categories);
  return (
    <>
      <section className="section bg-slate-500">
        <div className="container">
          <Link
            href="/#main-cat"
            className="mb-10 inline-block bg-slate-50 p-4"
          >
            Назад
          </Link>
          <h1 className="mb-10 text-[40px]">
            {category === '1' ? 'Мастильні матеріали' : 'SubCategories'}
          </h1>

          <CategoryList data={categories} path={`${category}`} />
        </div>
      </section>
    </>
  );
}
