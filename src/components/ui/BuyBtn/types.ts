import { CartItem } from '@/context/CartProvider/types';

export type BuyBtnProps = {
  disabled: boolean;
  cartItem: CartItem;
  className?: string;
};
