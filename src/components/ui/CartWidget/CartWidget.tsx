'use client';

import Link from 'next/link';

import { useCart } from '@/context';

import { cn } from '@/utils/cn';

import staticData from '@/data/common.json';
import CartIcon from '~/icons/shopping-cart.svg';

export const CartWidget: React.FC = () => {
  const { alt } = staticData.cart;

  const { items } = useCart();

  const qty = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link href="/cart">
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
    </Link>
  );
};
