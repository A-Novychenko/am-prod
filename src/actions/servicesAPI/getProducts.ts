const API_URL = process.env.API_URL as string;

export const getProducts = async (id: number, page: number) => {
  try {
    const result = await fetch(
      `${API_URL}/catalog/products?id=${id}&page=${page}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 },
        // cache: 'no-store',
      },
    );

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.getProducts', e);
    return null; // ✅ обязательно вернуть null
  }
};
