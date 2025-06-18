const API_URL = process.env.API_URL as string;

export const getCategory = async (id: number) => {
  try {
    const result = await fetch(`${API_URL}/catalog/category/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

      cache: 'no-store',
      // next: { revalidate: 0 },
      // body: JSON.stringify({ id }),
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.category;
  } catch (e) {
    console.log('e.getCategory', e);
    return null;
  }
};
