const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const getOrderStatus = async (id: string) => {
  try {
    const result = await fetch(`${API_URL}/orders/status/${id}`, {
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

    return res;
  } catch (e) {
    console.log('e.getOrderStatus', e);
  }
};
