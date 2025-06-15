const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const getProductsByTecDocArticle = async (
  article: string,
  // page?: number,
) => {
  try {
    const result = await fetch(
      `${NEXT_PUBLIC_API_URL}/catalog/search-products`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // next: { revalidate: 0 },
        cache: 'no-store',
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
