'use client';

import Image from 'next/image';

import { useCart } from '@/context';
import { CartItem } from '@/context/CartProvider/types';
// type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   price_promo: number;
//   quantity: number;
//   img: string;
// };

export const CartProducts: React.FC = () => {
  const {
    items,
    totalAmount,
    totalDiscount,
    totalAmountWithDiscount,
    addItem,
    removeItem,
  } = useCart();

  const increment = (item: CartItem) => {
    addItem({ ...item, quantity: item.quantity + 1 });
  };

  const decrement = (item: CartItem) => {
    if (item.quantity > 1) {
      addItem({ ...item, quantity: item.quantity - 1 });
    } else {
      // removeItem(item.id); // Видаляємо товар, якщо кількість стає 0
      return;
    }
  };

  return (
    <div className="mb-8">
      <ul className="mb-8">
        {items &&
          items.map(item => {
            const { id, name, price, price_promo, quantity, img } = item;

            const finalPrice = price_promo ? price_promo : price;

            return (
              <li
                key={id}
                className="mb-2 justify-between border border-solid border-blue-50 px-4 text-[18px]/normal md:flex"
              >
                <div className="items-center gap-4 md:flex">
                  <Image src={img} alt={name} width={100} height={100} />
                  <p className="grow">{name}</p>
                </div>

                <div className="items-center gap-10 md:flex smOnly:text-center">
                  {price_promo && (
                    <p className="line-through smOnly:mt-4">{price}грн</p>
                  )}
                  <p className="smOnly:mt-4">{finalPrice}грн</p>

                  <div className="flex items-center smOnly:justify-center">
                    <button
                      type="button"
                      className="size-8 rounded-md bg-slate-200"
                      onClick={() => {
                        decrement(item);
                      }}
                    >
                      -
                    </button>

                    <p className="size-8 text-center">{quantity}</p>

                    <button
                      type="button"
                      className="size-8 rounded-md bg-slate-200"
                      onClick={() => {
                        increment(item);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p className="smOnly:mt-4">{finalPrice * quantity}грн</p>

                  <button
                    type="button"
                    className="p-4 text-red"
                    onClick={() => {
                      removeItem(id);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
      </ul>

      <p className="text-right font-bold">Сума: {totalAmount} грн</p>

      {totalDiscount > 0 && (
        <>
          <p className="text-right font-bold">Знижка: {totalDiscount} грн</p>

          <p className="text-right font-bold">
            Сума зі знижкою: {totalAmountWithDiscount} грн
          </p>
        </>
      )}
    </div>
  );
};
