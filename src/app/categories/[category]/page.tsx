import { getCategories, getMainCategories } from '@/actions/servicesAPI';
import { CategoryList } from '@/components/base';

type Category = {
  id: string;
  name: string;
  parent_id: number;
};

export default async function CategoryPage({
  params: { category },
}: {
  params: { category: string };
}) {
  console.log('categoryID', category);
  const categories = await getCategories(category);

  console.log('categories', categories);
  return (
    <section className=" bg-slate-500">
      <CategoryList data={categories} path="/products" />
    </section>
  );
}

export async function generateStaticParams() {
  const categories = await getMainCategories();

  const staticParams =
    categories?.map((category: Category) => {
      return {
        category: category.id.toString(),
      };
    }) || [];

  return staticParams;
}
