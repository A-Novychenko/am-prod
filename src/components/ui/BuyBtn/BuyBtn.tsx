'use client';

import { useCart } from '@/context';

import { cn } from '@/utils/cn';

import { BuyBtnProps } from './types';

export const BuyBtn: React.FC<BuyBtnProps> = ({
  disabled,
  cartItem,
  className,
}) => {
  const { addItem } = useCart();

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={() => {
        addItem(cartItem);
      }}
      className={cn(
        'mx-auto block h-[48px] w-[186px] rounded-[8px] bg-darkBg text-[14px] font-bold uppercase leading-[1.7]',
        ' text-primaryText transition-all hover:bg-darkBg/85 disabled:bg-slate-500',
        className,
      )}
    >
      Купити
    </button>
  );
};
