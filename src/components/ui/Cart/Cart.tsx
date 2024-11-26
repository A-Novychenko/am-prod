'use client';

import { useState } from 'react';

import {
  CartContactForm,
  CartDeliveryForm,
  CartProducts,
} from '@/components/ui';
import { useCart } from '@/context';
import { DeliveryMethod } from './types';

const Cart: React.FC = () => {
  const { items } = useCart();

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

  const isEmptyCard = items.length === 0;

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
              <button
                type="button"
                className="mx-auto rounded bg-accent p-2 text-center font-medium"
                onClick={handleVisibleIncr}
              >
                Продовжити
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
