'use client';

import Image from 'next/image';

import { TiDelete } from 'react-icons/ti';
import staticData from '@/data/common.json';

import { useCart } from '@/context';
import { cn, currencyFormatted } from '@/utils';

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

  const { articleLabel } = staticData;

  const totalAmountFormatted: string = currencyFormatted(totalAmount);
  const totalDiscountFormatted: string = currencyFormatted(totalDiscount);
  const totalAmountWithDiscountFormatted: string = currencyFormatted(
    totalAmountWithDiscount,
  );

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
      <p className="mb-4 text-[18px] font-semibold">
        Товарів у кошику: {items.length}
      </p>

      <ul className="mb-8 flex flex-col gap-4">
        {items &&
          items.map(item => {
            const {
              id,
              name,
              price,
              price_promo,
              quantity,
              img,
              article,
              availability,
            } = item;

            const finalPrice = price_promo ? price_promo : price;

            const priceFormatted: string = currencyFormatted(price);
            const finalPriceFormatted: string = currencyFormatted(finalPrice);
            const finalPriceTotalFormatted: string = currencyFormatted(
              finalPrice * quantity,
            );

            const outOfStock = availability === '0';

            return (
              <li
                key={id}
                className={cn(
                  'relative gap-4 overflow-hidden rounded-[16px] border border-solid border-blue-100 text-[16px]/normal shadow-customLight',
                  'smOnly:px-2',
                  'md:flex md:flex-col md:items-center',
                  'xl:flex-row xl:justify-between',
                  { 'border-red bg-red/15': outOfStock },
                  { 'bg-saleBg': price_promo },
                )}
              >
                <div className="w-full gap-4 pt-2 md:flex md:flex-col md:items-center xl:flex-row xl:justify-between xl:pt-0">
                  <div className="size-[120px] shrink-0 smOnly:mx-auto">
                    <Image
                      src={img}
                      alt={name}
                      width={100}
                      height={100}
                      className="size-full object-contain"
                    />
                  </div>

                  <p className="grow smOnly:text-center">{name}</p>

                  <div className="w-[180px] shrink-0 text-center xl:text-left smOnly:w-full">
                    <p className="mb-2 text-[14px]">
                      {articleLabel}&nbsp;
                      {article}
                    </p>

                    <p className="mb-4 overflow-hidden text-ellipsis text-[12px] font-bold uppercase leading-[1.6]">
                      {availability === '0' ? (
                        <span className="text-rose-800">Немає в наявності</span>
                      ) : (
                        <span className="text-[14px] text-green-500">
                          В наявності {availability}шт
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="items-center gap-2 md:flex smOnly:text-center mdOnly:mb-4">
                  <div className="items-center gap-4  text-right md:flex  smOnly:text-center">
                    <div
                      className={cn('xl:w-[112px]', {
                        'flex-col items-end md:flex': price_promo,
                      })}
                    >
                      {price_promo && (
                        <p className="text-[14px] line-through smOnly:mt-4">
                          {priceFormatted}
                        </p>
                      )}

                      <p className="smOnly:mt-4">
                        <span className="smOnly:mb-2 smOnly:inline-block">
                          <span className="inline-block xl:hidden">
                            Ціна:&nbsp;
                          </span>
                          {finalPriceFormatted}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 xl:w-[112px] smOnly:justify-center">
                      <button
                        type="button"
                        className="size-8 rounded-md bg-slate-200"
                        onClick={() => {
                          decrement(item);
                        }}
                      >
                        -
                      </button>

                      <p className="inline-flex size-8 items-center justify-center text-center">
                        {quantity}
                      </p>

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

                    <p className="xl:w-[112px] smOnly:my-4 smOnly:font-bold">
                      <span className="inline-block xl:hidden">
                        Сумма:&nbsp;
                      </span>
                      {finalPriceTotalFormatted}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="absolute right-1 top-1 p-2 text-redApple transition-colors hover:text-darkRed focus:text-darkRed xl:static"
                    onClick={() => {
                      removeItem(id);
                    }}
                  >
                    <TiDelete size={24} />
                  </button>
                </div>

                <div
                  className={cn(
                    'absolute right-0 top-0 hidden h-[40px] w-[96px] smOnly:left-1 smOnly:top-2 smOnly:h-[55px] smOnly:w-[120px]',
                    {
                      block: price_promo,
                    },
                  )}
                >
                  <Image
                    src="/images/sale.webp"
                    width={500}
                    height={218}
                    alt="Акція"
                    className="size-full object-contain"
                  />
                </div>
              </li>
            );
          })}
      </ul>

      <p className="mb-4 text-right text-[18px] font-semibold">
        Товарів у кошику: {items.length}
      </p>

      <p
        className={cn('text-right font-bold', {
          ' font-normal': totalDiscount > 0,
        })}
      >
        Сума: {totalAmountFormatted}
      </p>

      {totalDiscount > 0 && (
        <>
          <p className="mt-1 text-right text-[18px] font-bold text-green-600">
            Знижка: {totalDiscountFormatted}
          </p>

          <p className="mt-2 text-right text-[18px] font-bold">
            Сума зі знижкою: {totalAmountWithDiscountFormatted}
          </p>
        </>
      )}
    </div>
  );
};
