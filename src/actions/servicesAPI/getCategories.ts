// const API_URL = 'http://localhost:3005/api';
const API_URL = 'https://autoparts-backend.onrender.com/api';

export const getCategories = async (id: string) => {
  try {
    const result = await fetch(`${API_URL}/catalog/category?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.categories;
  } catch (e) {
    console.log('e.getCategories', e);
  }
};
