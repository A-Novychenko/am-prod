// import { getCategories, getCategory } from '@/actions/servicesAPI';

// type Category = {
//   id: string;
//   name: string;
//   parent_id: number;
// };

// export async function generateStaticParams({
//   params: { category },
// }: {
//   params: { category: string };
// }) {
//   const categories = await getCategories(category);

//   return (
//     categories?.map((category: Category) => {
//       return {
//         category: category.id.toString(),
//       };
//     }) || []
//   );
// }

export default async function CategoryLayout({
  // params: { category },
  children,
}: {
  // params: { category: string };
  children: React.ReactNode;
}) {
  // const { name } = await getCategory(category);
  // console.log('name', name);
  // console.log('namecategory', category);
  return (
    <>
      {/* <section className="section">
        <div className="container">
          <h1>{name}</h1>
        </div>
      </section> */}
      {children}
    </>
  );
}
