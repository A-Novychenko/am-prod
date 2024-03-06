import { getProducts } from '@/actions/servicesAPI';
// import { CategoryList } from '@/components/base';
import { ProductCard } from '@/components/ui';

type Category = {
  id: string;
  name: string;
  parent_id: number;
};
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
  createdAt: string;
  updatedAt: string;
};

export default async function ProductPage({
  params: { product },
}: {
  params: { product: string };
}) {
  console.log('product', product);
  const products = await getProducts(product);

  console.log('products', products);
  return (
    <section className=" bg-slate-500">
      {/* <CategoryList data={products} path="/products" /> */}
      <ul className="flex flex-wrap gap-6">
        {products &&
          products.map((product: Product) => (
            <li key={product._id}>
              <ProductCard product={product} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  // export async function generateStaticParams(props) {
  // console.log('props', props);
  const categories = await getProducts('11');

  const staticParams =
    categories?.map((product: Category) => {
      return {
        product: product.id.toString(),
      };
    }) || [];

  return staticParams;
}
