export const makeSearchStructuredData = (
  query: string,
  items: Array<{
    name: string;
    price: number;
    url: string;
    img: string;
  }>,
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    name: `Результати пошуку: ${query}`,
    mainEntity: items.map(item => ({
      '@type': 'Product',
      name: item.name,
      image: item.img,
      url: item.url,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'UAH',
        price: item.price,
        availability: 'https://schema.org/InStock',
      },
    })),
  };
};
