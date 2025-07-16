const API_URL = process.env.API_URL as string;

export const getBrandsCategories = async () => {
  try {
    const result = await fetch(`${API_URL}/catalog/brands-categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: 'no-store',
      next: { revalidate: 3600 },
    });

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res.categories;
  } catch (e) {
    console.log('e.getBrandsCategories', e);
  }
};
