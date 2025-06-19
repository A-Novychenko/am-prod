export const makeCatStructuredData = ({
  category,
  categorySlug,
  brand,
  brandSlug,
  pageNumber = 1,
}: {
  category: string;
  categorySlug: string;
  categoryData?: { name: string; img: string };
  brand?: string;
  brandSlug?: string;
  pageNumber?: number;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';

  const isMainCategory = !brand;

  const basePath = isMainCategory
    ? `/catalog/grid/${categorySlug}`
    : `/catalog/grid/${categorySlug}/${brandSlug}/page-${pageNumber}`;

  const currentUrl = `${baseUrl}${basePath}`;

  const itemListElements = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Головна',
      item: baseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: category.charAt(0).toUpperCase() + category.slice(1),
      item: `${baseUrl}/catalog/grid/${categorySlug}`,
    },
  ];

  if (!isMainCategory) {
    itemListElements.push({
      '@type': 'ListItem',
      position: 3,
      name: brand!,
      item: `${baseUrl}/catalog/grid/${categorySlug}/${brandSlug}/page-1`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: currentUrl,
    name: `${isMainCategory ? category : `${category} ${brand}`} - Avto-magaz`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: itemListElements,
    },
  };
};
