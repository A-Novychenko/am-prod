const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';

export const makeVinStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Підбір автозапчастин по VIN-коду',
  description:
    'Вкажіть VIN-код Вашого автомобіля — це дозволить точно підібрати запчастини. Заповніть форму, і наші фахівці швидко підберуть потрібні автозапчастини для Вашої машини.',
  url: `${baseUrl}/vin-request`,
  publisher: {
    '@type': 'Organization',
    name: 'Avto-magaz',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/meta/android-chrome-512x512.png`,
    },
  },
};
