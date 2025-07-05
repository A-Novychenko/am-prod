import commonData from '@/data/common.json';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const { socialsArr, navLinks } = commonData;

const populateCats = navLinks.map(({ href, name }) => {
  return {
    '@type': 'OfferCatalog',
    name,
    url: `${BASE_URL}/${href}`,
  };
});

export const makeHomeStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        name: 'Avto-magaz',
        url: BASE_URL,
        inLanguage: 'uk',
        alternateName: ['Avto-magaz.com.ua', 'Авто-магазин АвтоМагаз'],
        potentialAction: {
          '@type': 'SearchAction',
          target: `${BASE_URL}/search-products/grid?searchQuery={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
        hasOfferCatalog: {
          '@id': `${BASE_URL}/#offerCatalog`,
        },
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Avto-magaz',
        foundingDate: '2012',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/`,
        },
        description:
          'Інтернет-магазин автотоварів з доставкою по Україні. Швидко, вигідно, надійно.',
        alternateName: ['Avto-magaz.com.ua', 'Авто-магазин АвтоМагаз'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+380972909397',
          contactType: 'customer support',
          areaServed: 'UA',
          availableLanguage: 'Ukrainian',
        },
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/meta/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        sameAs: socialsArr,
      },
      {
        '@type': 'Store',
        '@id': `${BASE_URL}/#store`,
        name: 'Avto-magaz',
        isAccessibleForFree: true,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/`,
        },
        image: `${BASE_URL}/meta/android-chrome-512x512.png`,
        url: BASE_URL,
        telephone: '+380972909397',
        description: 'Інтернет-магазин автотоварів з доставкою по Україні',
        areaServed: {
          '@type': 'Country',
          name: 'UA',
        },
        makesOffer: {
          '@type': 'OfferCatalog',
          name: 'Популярні категорії',
          itemListElement: populateCats,
        },
        sameAs: socialsArr,
      },
      {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/#webpage`,
        alternateName: ['Avto-magaz.com.ua', 'Авто-магазин АвтоМагаз'],
        url: BASE_URL,
        isAccessibleForFree: true,
        mainEntity: {
          '@type': 'Store',
          '@id': `${BASE_URL}/#store`,
        },
        name: 'Інтернет-магазин автотоварів в Україні — Avto-magaz',
        description:
          'Широкий вибір автотоварів за доступними цінами. Доставка по всій Україні. Гарантія якості. Акції та знижки щотижня.',
        inLanguage: 'uk',
        isPartOf: {
          '@id': `${BASE_URL}/#website`,
        },
        breadcrumb: {
          '@id': `${BASE_URL}/#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${BASE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Головна',
            item: BASE_URL,
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        '@id': `${BASE_URL}/#offerCatalog`,
        name: 'Популярні категорії автотоварів',
        url: BASE_URL,
        itemListElement: populateCats,
      },
    ],
  };
};
