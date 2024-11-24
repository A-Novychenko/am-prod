const API_URL = process.env.API_URL as string;

export const getCategories = async (id: string) => {
  try {
    const result = await fetch(`${API_URL}/catalog/category?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: 'no-cache',
      next: { revalidate: 60 },
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.categories;
  } catch (e) {
    console.log('e.getCategories', e);
  }
};
