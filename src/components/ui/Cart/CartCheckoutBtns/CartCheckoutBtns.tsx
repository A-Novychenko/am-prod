'use client';

import { Btn } from '@/components/ui';

import { CartCheckoutBtnsProps } from './types';

export const CartCheckoutBtns: React.FC<CartCheckoutBtnsProps> = ({
  hasUnavailableItem,
}) => {
  return (
    <div className="mx-auto flex gap-10">
      <div className="text-center">
        {hasUnavailableItem && (
          <p className="mb-4  text-red">
            Для того щоб продовжити приберіть товар якого немає в наявності
          </p>
        )}

        <div className="flex gap-4">
          <Btn
            styleType="primary"
            onClick={() => {
              alert('Замовлення створено');
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
