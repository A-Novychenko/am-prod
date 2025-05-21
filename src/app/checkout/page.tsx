import Cart from '@/components/ui/Cart/Cart';

export default function CheckoutPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-10 text-[24px]/normal font-bold">
          Оформлення замовлення
        </h1>

        <Cart isPage isCheckoutPage />
      </div>
    </section>
  );
}
