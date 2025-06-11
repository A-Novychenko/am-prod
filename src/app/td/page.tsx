import {} from '@/sections';

export default async function TDCatPage() {
  const url =
    'https://tec-doc-database.p.rapidapi.com/cars/manufacturers/%7BlangId%7D';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '03f5ef5b2emsh53680763660335cp1092e4jsn6f54f5624c74',
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
  return <></>;
}
