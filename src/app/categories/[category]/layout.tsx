import { getCategories } from '@/actions/servicesAPI';

type Category = {
  id: string;
  name: string;
  parent_id: number;
};

export async function generateStaticParams({
  params: { category },
}: {
  params: { category: string };
}) {
  const categories = await getCategories(category);

  return (
    categories?.map((category: Category) => {
      return {
        category: category.id.toString(),
      };
    }) || []
  );
}

export default async function CategoryLayout({
  // params: { category },
  children,
}: {
  // params: { category: string };
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
