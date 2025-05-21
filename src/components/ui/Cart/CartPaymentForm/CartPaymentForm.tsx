'use client';

import React from 'react';

type PaymentMethod = 'card' | 'cash';

interface PaymentFormProps {
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  className?: string;
}

export const CartPaymentForm: React.FC<PaymentFormProps> = ({
  paymentMethod,
  setPaymentMethod,
  className = '',
}) => {
  const handleChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  return (
    <div className={className}>
      <div className="flex flex-col gap-4 rounded-[16px] bg-white p-4">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Виберіть спосіб оплати
        </h2>
        <div className="flex flex-col gap-2">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => handleChange('card')}
              className="size-5 text-darkBlueText focus:ring-darkBlueText"
            />
            <span className="text-sm text-gray-700">Оплата карткою</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => handleChange('cash')}
              className="size-5 text-darkBlueText focus:ring-darkBlueText"
            />
            <span className="text-sm text-gray-700">Готівка при отриманні</span>
          </label>
        </div>
      </div>

      <p className="p-4">
        Вибраний спосіб оплати:{' '}
        <strong>
          {paymentMethod === 'card'
            ? 'Оплата карткою'
            : 'Готівка при отриманні'}
        </strong>
      </p>
    </div>
  );
};
