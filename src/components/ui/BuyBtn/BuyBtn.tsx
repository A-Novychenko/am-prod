'use client';

import { useCart } from '@/context';

import { BuyBtnProps } from './types';

export const BuyBtn: React.FC<BuyBtnProps> = ({ disabled, cartItem }) => {
  const { addItem } = useCart();

  return (
    <button
      disabled={disabled}
      type="button"
      onClick={() => {
        addItem(cartItem);
      }}
      className="mx-auto block h-[48px] w-[186px] rounded-[8px] bg-darkBlueBg text-[14px] font-bold uppercase leading-[1.7] text-primaryText transition-all hover:bg-darkBg/85 disabled:bg-slate-500"
    >
      Купити
    </button>
  );
};
