const API_URL = process.env.API_URL as string;

export const getBannerProducts = async () => {
  try {
    const result = await fetch(`${API_URL}/catalog/banner`, {
      // const result = await fetch(`${API_URL}/catalog/products?id=14`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
      // cache: 'no-store',
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.getBannerProducts', e);
    return { products: [] }; // 👈 добавь fallback
  }
};
