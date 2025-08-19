// export const dynamic = 'force-dynamic';

const API_URL = process.env.API_URL as string;

export const getProductData = async (id: string) => {
  try {
    const result = await fetch(`${API_URL}/catalog/single-product/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
      // cache: 'no-store',
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.data;
  } catch (e) {
    console.log('e.getProductsData', e);
  }
};
