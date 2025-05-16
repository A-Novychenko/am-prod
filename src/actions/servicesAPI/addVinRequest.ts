/* eslint-disable @typescript-eslint/no-explicit-any */
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const addVinRequest = async (formData: Record<string, any>) => {
  try {
    const result = await fetch(`${API_URL}/orders/add-vin-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 0 },
      body: JSON.stringify(formData),
    });

    const res = await result.json();

    if (res.code !== 201) throw new Error('Server not connect');

    return res;
  } catch (e) {
    console.log('e.addVinRequest', e);
    throw new Error();
  }
};
