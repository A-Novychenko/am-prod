// export const dynamic = 'force-dynamic';
// import Link from 'next/link';

// import { ProductList } from '@/components/base';

// import { getProducts } from '@/actions/servicesAPI';

// export async function generateStaticParams() {
//   return [];
// }

// export default async function ProductPage({
//   params: { product, category },
// }: {
//   params: { product: string; category: string };
// }) {
//   const products = await getProducts(product);

//   return (
//     <>
//       <section className="section bg-slate-500">
//         <div className="container">
//           <Link
//             href={`/categories/${category}`}
//             className="mb-10 inline-block bg-slate-50 p-4"
//           >
//             Назад
//           </Link>
//           {/* <h1 className="mb-10 text-[40px]">{products[0]?.category}</h1> */}
//           <h1 className="mb-10 text-[40px]">Products</h1>

//           <ProductList products={products} />
//         </div>
//       </section>
//     </>
//   );
// }
// app/categories/[category]/[product]/page.tsx

import Link from 'next/link';
import { ProductList } from '@/components/base';
import { getProducts } from '@/actions/servicesAPI';

export const dynamic = 'force-dynamic';

export default async function ProductPage({
  params: { product, category },
  searchParams,
}: {
  params: { product: string; category: string };
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || '1', 10); // Отримуємо поточну сторінку з query
  const { products, totalPages } = await getProducts(product, page);

  // console.log('page', page);
  // console.log('product', product);
  // console.log('products', products);

  // const totalPages = 5;

  // const products = await getProducts(product);

  return (
    <section className="section bg-slate-500">
      <div className="container">
        <Link
          href={`/categories/${category}`}
          className="mb-10 inline-block bg-slate-50 p-4"
        >
          Назад
        </Link>
        <h1 className="mb-10 text-[40px]">Products</h1>
        <ProductList products={products} />
        {/* Пагінація */}
        <div className="mt-10 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Link
              key={index + 1}
              href={`/categories/${category}/${product}?page=${index + 1}`}
              className={`mx-1 px-4 py-2 ${
                page === index + 1
                  ? 'bg-slate-50 text-slate-900'
                  : 'bg-slate-700 text-white'
              }`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
