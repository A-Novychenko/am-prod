interface ProductStructuredDataParams {
  name: string;
  brand: string;
  description: string;
  image: string;
  price: number;
  availability: boolean;
  url: string;
  currency?: string;
}

export const makeProductStructuredData = ({
  name,
  brand,
  description,
  image,
  price,
  availability,
  url,
  currency = 'UAH',
}: ProductStructuredDataParams) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: currency,
      price: price.toFixed(2),
      availability: availability
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };
};
