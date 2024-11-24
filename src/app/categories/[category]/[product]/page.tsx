export const dynamic = 'force-dynamic';

import { getProducts } from '@/actions/servicesAPI';
// import { CategoryList } from '@/components/base';
import { ProductCard } from '@/components/ui';
import Link from 'next/link';

// type Category = {
//   id: string;
//   name: string;
//   parent_id: number;
// };
type Product = {
  _id: string;
  id: number;
  cid: string;
  category: string;
  category_id: number;
  brand: string;
  article: string;
  tecdoc_article: string;
  name: string;
  description: string;
  price_currency_980: string;
  price_type_1_currency_980: string;
  price_type_2_currency_980: string;
  count_warehouse_3: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
};

export async function generateStaticParams() {
  // export async function generateStaticParams({
  //   params: { category },
  // }: {
  //   params: { category: string };
  // }) {
  // console.log('category--generateStaticParams', category);
  // const categories = await getProducts(category);

  // const staticParams =
  //   categories?.map((product: Category) => {
  //     return {
  //       product: product.id?.toString(),
  //     };
  //   }) || [];

  // console.log('staticParams', staticParams);

  // return staticParams;
  return [];
}

export default async function ProductPage({
  params: { product, category },
}: {
  params: { product: string; category: string };
}) {
  // console.log('product', product);
  const products = await getProducts(product);
  // const products = [];

  // console.log('products[0]', products[0]);
  return (
    <>
      <section className="section bg-slate-500">
        <div className="container">
          <Link
            href={`/categories/${category}`}
            className="mb-10 inline-block bg-slate-50 p-4"
          >
            Назад
          </Link>
          {/* <h1 className="mb-10 text-[40px]">{products[0]?.category}</h1> */}
          <h1 className="mb-10 text-[40px]">Products</h1>

          <ul className="flex flex-wrap gap-6">
            {products &&
              products.map((product: Product) => (
                <li key={product._id}>
                  <ProductCard product={product} />
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
