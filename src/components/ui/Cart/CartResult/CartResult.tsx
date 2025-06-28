'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { GoLink } from 'react-icons/go';

import {
  CartOrderStatus,
  CartProducts,
  CommentBox,
  CopyBtn,
} from '@/components/ui';

import { getOrderStatus } from '@/actions/servicesAPI';
import {
  generateDeliveryMethodText,
  generatePaymentMethodText,
  formatDateToUkrainian,
} from '@/utils';

import { CartItem } from '@/context/CartProvider/types';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
const PATH = '/checkout/result';

export const CartResult: React.FC = () => {
  const searchParams = useSearchParams();
  const dataStr = searchParams.get('data');

  const [status, setStatus] = useState<OrderStatus | null>(null);

  const data: CheckoutResult | null = (() => {
    const str = searchParams.get('data');
    if (!str) return null;

    try {
      return JSON.parse(decodeURIComponent(str)) as CheckoutResult;
    } catch {
      return null;
    }
  })();

  const id = data?._id;

  const orderLink = `${BASE_URL}${PATH}?data=${encodeURIComponent(dataStr ?? '')}`;

  useEffect(() => {
    if (!id) return;

    const getStatus = async () => {
      const res = await getOrderStatus(id);

      setStatus(res.data);
    };

    getStatus();
  }, [id]);

  const sumProductPrices = (products: CartItem[]): number =>
    products.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateTotalPrice = (products: CartItem[]): number =>
    products.reduce((total, item) => {
      const actualPrice =
        item.price_promo !== null ? item.price_promo : item.price;
      return total + actualPrice * item.quantity;
    }, 0);

  const Sale = ({ products }: { products: CartItem[] }) => {
    const sale: number =
      sumProductPrices(products) - calculateTotalPrice(products);

    if (sale < 1) return null;

    return (
      <p className="mb-3 text-[18px] font-black text-green-600">
        Знижка: {''}
        {sumProductPrices(products) - calculateTotalPrice(products)}
        грн
      </p>
    );
  };

  return (
    <>
      {data && (
        <>
          <div className="mb-6 xl:flex xl:flex-col">
            <div className="xl:flex xl:gap-6">
              <div className="mb-8 text-center xl:w-1/2">
                <h2 className="mb-2 text-[24px] font-extrabold">
                  Замовлення №{data.number}
                </h2>

                <p className="mb-1 text-sm text-gray-500">
                  Дата створення: {formatDateToUkrainian(data.createdAt)}
                </p>

                <CartOrderStatus status={status} />

                <div className="mx-auto mt-4 w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                  <Link
                    href={orderLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-700 hover:underline focus:underline xl:justify-center"
                  >
                    <GoLink className="size-4 text-blue-500" />
                    Посилання на відстеження
                  </Link>

                  <p className="mb-3 text-sm text-gray-500">
                    Натисніть кнопку нижче, щоб скопіювати посилання для
                    перегляду статусу замовлення.
                  </p>

                  <CopyBtn orderLink={orderLink} />
                </div>
              </div>

              <div className="mb-4 hidden justify-center xl:flex xl:grow xl:items-center">
                <div className="mb-4 w-full max-w-md rounded-xl border border-gray-200 bg-saleBg/30 py-4 text-center shadow-sm xl:py-8">
                  <h3 className=" mb-4 text-center text-[20px] font-extrabold">
                    Підсумок замовлення
                  </h3>

                  <p className="mb-3">
                    <span className=" font-bold"> {data.products.length}</span>{' '}
                    товарів на суму{' '}
                    <span className="font-bold">
                      {' '}
                      {sumProductPrices(data.products)}грн
                    </span>
                  </p>

                  <Sale products={data.products} />

                  <p className="text-[18px] font-extrabold">
                    <span>Сума до сплати: </span>
                    {calculateTotalPrice(data.products)}грн
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:flex xl:gap-6">
              <div className="mb-4 flex justify-center xl:grow">
                <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:max-w-full">
                  <h3 className="mb-4 text-center text-[18px] font-bold">
                    Контактна інформація
                  </h3>

                  <table className="w-full border-separate border-spacing-y-2">
                    <tbody>
                      <tr>
                        <td className="w-1/2 font-bold">Імʼя:</td>
                        <td>{data.name}</td>
                      </tr>

                      <tr>
                        <td className="font-bold">Телефон:</td>
                        <td className="break-all tracking-[-1px]">
                          {data.phone}
                        </td>
                      </tr>

                      {data.email && (
                        <tr>
                          <td className="font-bold">Email:</td>
                          <td className="break-all tracking-[-1px]">
                            {data.email}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-4 flex justify-center xl:grow">
                <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-sm xl:max-w-full">
                  <h3 className="mb-4 text-center text-[18px] font-bold">
                    Спосіб доставки та оплата
                  </h3>

                  <table className="w-full border-separate border-spacing-y-2">
                    <tbody>
                      <tr>
                        <td className="w-1/2 font-bold">Спосіб доставки:</td>
                        <td>{generateDeliveryMethodText(data.delivery)}</td>
                      </tr>

                      {data.delivery === 'post' && (
                        <tr>
                          <td className="font-bold">Відділення:</td>
                          <td>
                            {data.deliveryCity} №{data.postOffice}
                          </td>
                        </tr>
                      )}

                      <tr>
                        <td className="font-bold">Спосіб оплати:</td>
                        <td>{generatePaymentMethodText(data.payment)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {data.message && <CommentBox comment={data.message} />}
            </div>

            <div className="mb-4 flex justify-center xl:hidden">
              <div className="mb-4 w-full max-w-md rounded-xl border border-gray-200 bg-saleBg/30 py-4 text-center shadow-sm">
                <h3 className=" mb-4 text-center text-[20px] font-extrabold">
                  Підсумок замовлення
                </h3>

                <p className="mb-3">
                  <span className=" font-bold"> {data.products.length}</span>{' '}
                  товарів на суму{' '}
                  <span className="font-bold">
                    {sumProductPrices(data.products)}грн
                  </span>
                </p>

                <Sale products={data.products} />

                <p className="text-[18px] font-extrabold">
                  <span>Сума до сплати: </span>
                  {calculateTotalPrice(data.products)}грн
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4 flex justify-center">
            <div className="mb-4 w-full max-w-md  shadow-sm xl:max-w-full">
              <CartProducts items={data.products} isCheckoutResultPage />
            </div>
          </div>
        </>
      )}
    </>
  );
};
