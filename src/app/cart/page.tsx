import dynamic from 'next/dynamic';

const Cart = dynamic(() => import('@/components/ui/Cart/Cart'), {
  ssr: false,
});

export default function CartPagePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-10 text-[24px]/normal font-bold">Кошик товарів</h1>

        <Cart />
      </div>
    </section>
  );
}
