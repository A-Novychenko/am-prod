// const API_URL = process.env.API_URL as string;

export const getProductsByTecDocArticle = async (
  article: string,
  // page?: number,
) => {
  try {
    const result = await fetch(
      // `${API_URL}/catalog/products?id=${id}&page=${page}`,
      // `${API_URL}/catalog/search-products`,
      `http://localhost:3005/api/catalog/search-products`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 0 },
        // cache: 'no-cache',
        body: JSON.stringify({ article }),
      },
    );

    const res = await result.json();

    if (res.code !== 200) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.getProductsByTecDocArticle', e);
  }
};
