const API_URL = process.env.API_URL as string;

export const getTopProducts = async () => {
  try {
    const result = await fetch(`${API_URL}/catalog/top-products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
      // cache: 'no-store',
    });

    if (!result.ok) return null;

    const res = await result.json();
    if (res.code !== 200) return null;

    // return res.products ?? null;
    return res.products ?? null;
  } catch (e) {
    console.error('getTopProducts error:', e);
    return null;
  }
};
