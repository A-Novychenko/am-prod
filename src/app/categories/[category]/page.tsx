import { getCategories } from '@/actions/servicesAPI';
import { CategoryList } from '@/components/base';

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
      <h1>SubCategories</h1>

      <section className=" bg-slate-500">
        {/* <CategoryList data={categories} path={`/category/${category}/products`} /> */}
        <CategoryList data={categories} path={`${category}`} />
      </section>
    </>
  );
}
