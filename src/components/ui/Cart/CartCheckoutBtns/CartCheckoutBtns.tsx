'use client';

import { useEffect, useState } from 'react';

import { Btn } from '@/components/ui';

import { CartCheckoutBtnsProps } from './types';

export const CartCheckoutBtns: React.FC<CartCheckoutBtnsProps> = ({
  hasUnavailableItem,
  handleSubmitCart,
  errors,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [scrollCount, setScrollCount] = useState<number>(0);

  useEffect(() => {
    if (scrollCount < 1) {
      scrollToTop();
      setScrollCount(pS => pS + 1);
    }
  }, [errors, scrollCount]);

  return (
    <div className="mx-auto flex gap-10">
      <div className="text-center">
        {hasUnavailableItem && (
          <p className="mb-4  text-red">
            Щоб продовжити оформлення, видаліть товар, якого немає в наявності.
          </p>
        )}

        <div className="flex gap-4">
          <Btn
            styleType="primary"
            onClick={() => {
              handleSubmitCart();

              setScrollCount(0);
            }}
            disabled={hasUnavailableItem}
          >
            Відправити замовлення
          </Btn>
        </div>
      </div>
    </div>
  );
};
