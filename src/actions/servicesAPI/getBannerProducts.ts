const API_URL = process.env.API_URL as string;

export const getBannerProducts = async () => {
  try {
    // const result = await fetch(`${API_URL}/catalog/banner`, {
    const result = await fetch(`${API_URL}/catalog/products?id=14`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 },
      // cache: 'no-cache',
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.getBannerProducts', e);
  }
};
