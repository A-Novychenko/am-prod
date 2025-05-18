'use client';

// import Link from 'next/link';

import { useCart } from '@/context';

import { cn } from '@/utils';

import staticData from '@/data/common.json';
import CartIcon from '~/icons/shopping-cart.svg';
import { useRouter } from 'next/navigation';

export const CartWidget: React.FC = () => {
  const { alt } = staticData.cart;

  const router = useRouter();

  const { items } = useCart();

  const qty = items.reduce((total, item) => total + item.quantity, 0);

  return (
    // <Link href="/cart">
    <button onClick={() => router.push('/cart')}>
      <div className="relative">
        <CartIcon width={60} height={60} alt={alt} />

        <span
          className={cn(
            'absolute left-[18%] top-[-30%] flex size-[32px] items-center justify-center rounded-full bg-slate-500 text-[20px]',
            { 'bg-redApple text-primaryText': qty > 0 },
          )}
        >
          {qty}
        </span>
      </div>
    </button>
    // </Link>
  );
};
