export const makeHomeStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Avto-magaz',
  url: process.env.NEXT_PUBLIC_BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${process.env.NEXT_PUBLIC_BASE_URL}/search-products?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Avto-magaz',
    logo: {
      '@type': 'ImageObject',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/meta/android-chrome-512x512.png`,
    },
  },
  inLanguage: 'uk-UA',
});
