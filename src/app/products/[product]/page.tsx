import { getProducts } from '@/actions/servicesAPI';
import { CategoryList } from '@/components/base';

type Category = {
  id: string;
  name: string;
  parent_id: number;
};

export default async function ProductPage({
  params: { product },
}: {
  params: { product: string };
}) {
  console.log('product', product);
  const products = await getProducts(product);

  // console.log('products', products);
  return (
    <section className=" bg-slate-500">
      <CategoryList data={products} path="/products" />
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
