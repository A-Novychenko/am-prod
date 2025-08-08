import {} from '@/sections';

export default async function TDCatPage() {
  const url =
    'https://tec-doc-database.p.rapidapi.com/cars/manufacturers/%7BlangId%7D';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '09eda766d0msh777dfaa1251bf96p1e10a4jsn0d5f7b881a00',
      'x-rapidapi-host': 'tec-doc-database.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await fetch(url, options);
    const result = await response.text();

    console.log(result);
  } catch (error) {
    console.error(error);
  }

  return <></>;
}
