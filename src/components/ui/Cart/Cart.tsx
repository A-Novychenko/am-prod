'use client';

import { cn } from '@/utils/cn';

import CartIcon from '~/icons/shopping-cart.svg';

import staticData from '@/data/common.json';

export const Cart: React.FC = () => {
  const { alt } = staticData.cart;

  const qty = 0;
  return (
    <div className="relative">
      <CartIcon width={60} height={60} alt={alt} />
      <span
        className={cn(
          'absolute left-[18%] top-[-30%] flex size-[32px] items-center justify-center rounded-full bg-slate-500 text-[20px]',
          { 'bg-accent text-secondaryText': qty > 0 },
        )}
      >
        {qty}
      </span>
    </div>
  );
};
