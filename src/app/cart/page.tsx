import Cart from '@/components/ui/Cart/Cart';

export default function CartPagePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-10 text-[24px]/normal font-bold">Кошик товарів</h1>

        <Cart isPage isCheckoutPage={false} />
      </div>
    </section>
  );
}
