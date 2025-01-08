import { idsType } from '@/context/CartProvider/types';

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const getProductsForCartByIds = async (ids: idsType) => {
  try {
    const result = await fetch(
      `${NEXT_PUBLIC_API_URL}/catalog/products-cart-list?ids=${ids}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 },
        // cache: 'no-cache',
      },
    );

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.getProductsForCartByIds', e);
  }
};
