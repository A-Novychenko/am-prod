'use client';

import { useRouter } from 'next/navigation';

import { useCart } from '@/context';

import { cn } from '@/utils';

import staticData from '@/data/common.json';
import CartIcon from '~/icons/shopping-cart.svg';

export const CartWidget: React.FC = () => {
  const { alt } = staticData.cart;

  const router = useRouter();

  const { items } = useCart();

  const qty = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button onClick={() => router.push('/cart')} aria-label={alt}>
      <span className="relative block">
        <CartIcon width={60} height={60} />

        <span
          className={cn(
            'absolute left-[18%] top-[-30%] flex size-[32px] items-center justify-center rounded-full bg-slate-500 text-[20px]',
            { 'bg-redApple text-primaryText': qty > 0 },
          )}
        >
          {qty}
        </span>
      </span>
    </button>
  );
};
