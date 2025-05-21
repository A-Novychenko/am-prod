'use client';

import { useEffect, useState } from 'react';

import {
  CartBtns,
  CartCheckoutBtns,
  CartContactForm,
  CartDeliveryForm,
  CartPaymentForm,
  CartProducts,
  CartSummary,
} from '@/components/ui';

import { useCart } from '@/context';

import { CartProps, DeliveryMethod } from './types';

type PaymentMethod = 'card' | 'cash';

const Cart: React.FC<CartProps> = ({ isPage, isCheckoutPage }) => {
  const { items, syncCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [deliveryMethod, setDeliveryMethod] =
    useState<DeliveryMethod>('pickup');

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  useEffect(() => {
    // Синхронізація кошика при завантаженні сторінки
    const updCart = async () => {
      syncCart();
    };

    updCart();
  }, [syncCart]);

  if (items.length === 0) {
    return <p>Немає товарів у кошику</p>;
  }

  const hasUnavailableItem = items.some(item => item.availability === '0');

  const hasContactsData = Object.values(formData).some(
    value => value !== null && value !== undefined && value !== '',
  );

  return (
    <>
      <div className="flex flex-col">
        {isCheckoutPage ? (
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="flex grow flex-col gap-6">
                <CartProducts isCheckoutPage />
              </div>

              <div className="relative flex w-[300px] gap-6 ">
                <div className="sticky top-8 flex h-fit w-full flex-col gap-6 rounded-[16px] px-3 py-4 shadow-customLight ">
                  <CartSummary className="w-full text-left" />
                  {hasContactsData && (
                    <div>
                      <p>Контактні дані:</p>
                      {formData.name && <p>Імʼя: {formData.name}</p>}
                      {formData.phone && <p>Телефон: {formData.phone}</p>}
                      {formData.email && <p>Емейл: {formData.email}</p>}
                      {formData.comment && <p>Коментар: {formData.comment}</p>}
                    </div>
                  )}
                  <p>
                    Спосіб доставки:{' '}
                    {deliveryMethod === 'pickup' ? 'Самовивіз' : 'Нова пошта'}
                  </p>
                  <p>
                    Спосіб оплати:{' '}
                    {paymentMethod === 'card' ? 'Картою' : 'Готівка'}
                  </p>
                  <CartCheckoutBtns hasUnavailableItem={hasUnavailableItem} />
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <CartContactForm
                formData={formData}
                setFormData={setFormData}
                className="w-[434px] rounded-[16px] shadow-customLight"
              />
              <CartDeliveryForm
                deliveryMethod={deliveryMethod}
                setDeliveryMethod={setDeliveryMethod}
                className="w-[434px] rounded-[16px] shadow-customLight"
              />
              <CartPaymentForm
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                className="w-[434px] rounded-[16px] shadow-customLight"
              />
            </div>
          </div>
        ) : (
          <>
            <CartProducts className="flex h-[50vh] flex-col gap-4 overflow-hidden overflow-y-auto p-4 xl:h-[40vh]" />

            <CartSummary className="pt-2 shadow-customTop md:pt-8" />

            <CartBtns hasUnavailableItem={hasUnavailableItem} isPage={isPage} />
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
