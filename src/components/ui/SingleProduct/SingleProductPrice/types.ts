import { CartItem } from '@/context/CartProvider/types';

export type SingleProductPriceProps = {
  isOutOfStock: boolean;
  hasPromo: boolean;
  pricePromo: number | null;
  price: number;
  cartItem: CartItem;
};
