// const API_URL = 'http://localhost:3005/api';
const API_URL = 'https://autoparts-backend.onrender.com/api';

export const getProducts = async (id: string) => {
  try {
    const result = await fetch(`${API_URL}/catalog/products?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 1 },
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.products;
  } catch (e) {
    console.log('e.getCategories', e);
  }
};
