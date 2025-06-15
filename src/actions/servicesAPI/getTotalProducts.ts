const API_URL = process.env.API_URL as string;

export const getTotalProducts = async () => {
  try {
    const result = await fetch(`${API_URL}/catalog/products-total`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // next: { revalidate: 0 },
      cache: 'no-store',
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.getTotalProducts', e);
  }
};
