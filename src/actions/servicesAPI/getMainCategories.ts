const API_URL = process.env.API_URL as string;

export const getMainCategories = async () => {
  try {
    const result = await fetch(`${API_URL}/catalog/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 0,
      },
      // cache: 'no-cache',
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.categories;
  } catch (e) {
    console.log('e.getCategories', e);
    return null;
  }
};
