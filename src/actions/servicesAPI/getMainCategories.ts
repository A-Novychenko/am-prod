// const API_URL = 'http://localhost:3005/api';
const API_URL = 'https://autoparts-backend.onrender.com/api';

export const getMainCategories = async () => {
  try {
    const result = await fetch(`${API_URL}/catalog/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 5,
      },
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.categories;
  } catch (e) {
    console.log('e.getCategories', e);
    return null;
  }
};
