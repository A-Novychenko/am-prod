'use client';

import { useEffect, useState } from 'react';

import {
  CartContactForm,
  CartDeliveryForm,
  CartProducts,
} from '@/components/ui';

import { useCart } from '@/context';

import { cn } from '@/utils';

import { DeliveryMethod } from './types';

const Cart: React.FC = () => {
  const { items, syncCart } = useCart();

  const [isVisible, setIsVisible] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>('pickup');

  const handleVisibleIncr = () => {
    setIsVisible(pSt => pSt + 1);
  };

  const handleVisibleDecr = () => {
    setIsVisible(pSt => pSt - 1);
  };

  useEffect(() => {
    // Синхронізація кошика при завантаженні сторінки
    const updCart = async () => {
      syncCart();
    };

    updCart();
  }, [syncCart]);

  const isEmptyCard = items.length === 0;

  const hasUnavailableItem = items.some(item => item.availability === '0');

  return (
    <>
      {isEmptyCard ? (
        <p>Немає товарів у кошику</p>
      ) : (
        <div className="flex flex-col">
          {isVisible === 1 && <CartProducts />}

          {isVisible === 2 && (
            <CartContactForm formData={formData} setFormData={setFormData} />
          )}

          {isVisible === 3 && (
            <div className="p-6">
              <CartDeliveryForm
                deliveryMethod={deliveryMethod}
                setDeliveryMethod={setDeliveryMethod}
              />
            </div>
          )}

          <div className="mx-auto flex gap-10">
            {isVisible === 1 ? null : (
              <button
                type="button"
                className="mx-auto rounded bg-mediumBg p-2 text-center font-medium"
                onClick={handleVisibleDecr}
              >
                Повернутись
              </button>
            )}

            {isVisible === 3 ? (
              <button
                type="button"
                className="mx-auto rounded bg-accent p-2 text-center font-medium"
                onClick={handleVisibleIncr}
              >
                Замовити
              </button>
            ) : (
              <div className="text-center">
                {hasUnavailableItem && (
                  <p className="mb-4 text-red">
                    Для того щоб продовжити приберіть товар якого немає в
                    наявності
                  </p>
                )}

                <button
                  type="button"
                  className={cn(
                    'mx-auto cursor-pointer rounded bg-accent p-2 text-center font-medium ',
                    'transition-colors hover:bg-darkBg hover:text-primaryText disabled:bg-slate-300 disabled:text-slate-500',
                  )}
                  onClick={handleVisibleIncr}
                  disabled={hasUnavailableItem}
                >
                  Продовжити
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
