'use client';

import { useRouter } from 'next/navigation';

import { Btn } from '@/components/ui';

import { CartBtnsProps } from './types';

export const CartBtns: React.FC<CartBtnsProps> = ({
  hasUnavailableItem,
  isPage,
}) => {
  const router = useRouter();
  return (
    <div className="mx-auto flex gap-10">
      <div className="text-center">
        {hasUnavailableItem && (
          <p className="mb-4  text-red">
            Для того щоб продовжити приберіть товар якого немає в наявності
          </p>
        )}

        <ul className="flex gap-4">
          {!isPage && (
            <li>
              <Btn
                styleType="accent"
                onClick={() => {
                  router.back();
                }}
              >
                Продовжити покупки
              </Btn>
            </li>
          )}

          <li>
            <Btn
              styleType="primary"
              onClick={() => {
                router.replace('/checkout');
              }}
              disabled={hasUnavailableItem}
            >
              Оформити замовлення
            </Btn>
          </li>
        </ul>
      </div>
    </div>
  );
};
