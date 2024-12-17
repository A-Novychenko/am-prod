const API_URL = process.env.API_URL as string;

export const getCategory = async (id: string) => {
  console.log('API_URL', API_URL);
  try {
    const result = await fetch(`${API_URL}/catalog/category/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

      // cache: 'no-cache',
      next: { revalidate: 0 },
      // body: JSON.stringify({ id }),
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.categories;
  } catch (e) {
    console.log('e.getCategory', e);
  }
};
