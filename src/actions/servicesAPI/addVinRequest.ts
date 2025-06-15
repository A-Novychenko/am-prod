/* eslint-disable @typescript-eslint/no-explicit-any */

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const addVinRequest = async (formData: Record<string, any>) => {
  try {
    const response = await fetch(`${API_URL}/orders/add-vin-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // next: { revalidate: 0 },
      cache: 'no-store',
      body: JSON.stringify(formData),
    });

    const json = await response.json();

    if (!response.ok) {
      // Пробрасываем статус и тело ошибки
      const error: any = new Error(json?.message || 'Server error');
      error.status = response.status;
      error.response = json;
      throw error;
    }

    return json;
  } catch (e) {
    console.log('e.addVinRequest', e);
    throw e;
  }
};
