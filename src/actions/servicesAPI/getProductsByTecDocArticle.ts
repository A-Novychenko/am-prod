export const getProductsByTecDocArticle = async (
  article: string,
  // page?: number,
) => {
  try {
    // const result = await fetch(`http://localhost:3005/api/catalog/search-products`, {
    const result = await fetch(
      `https://autoparts-backend.onrender.com/api/catalog/search-products`,
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
