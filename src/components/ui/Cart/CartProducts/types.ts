import { CartItem } from '@/context/CartProvider/types';

export type CartProductsProps = {
  items: CartItem[];
  className?: string;
  isCheckoutPage?: boolean;
  isCheckoutResultPage?: boolean;
};
