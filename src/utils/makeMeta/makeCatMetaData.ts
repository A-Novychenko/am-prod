interface CategoryMetaParams {
  category: string;
  categorySlug: string;
  categoryData: { name: string; img: string } | null;
  brand?: string;
  brandSlug?: string;
  pageNumber?: number; // >=1
}

export const makeCatMetaData = ({
  category,
  categorySlug,
  categoryData,
  brand,
  brandSlug,
  pageNumber = 1,
}: CategoryMetaParams) => {
  if (!categoryData) {
    return {
      title: 'Категорію не знайдено — Avto-magaz',
      description: 'Схоже, що цієї категорії не існує або сталася помилка.',
      robots: { index: false, follow: false },
    };
  }

  const isMainCategory = !brand;
  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // Заголовок
  const baseTitle = isMainCategory
    ? capitalizedCategory
    : `${brand} — ${capitalizedCategory}`;

  // Title: для главной категории без пагинации, для подкатегорий с номером страницы в title
  const fullTitle = isMainCategory
    ? `${baseTitle} | Avto-magaz`
    : `${baseTitle} — сторінка ${pageNumber} | Avto-magaz`;

  // Описание
  const pageText = isMainCategory ? '' : `Сторінка ${pageNumber}. `;

  const baseDescription = isMainCategory
    ? `Категорія "${capitalizedCategory}" — широкий вибір якісних автотоварів. Гарантія, швидка доставка по Україні та приємні ціни.`
    : `${pageText}${brand} — надійний бренд у категорії "${capitalizedCategory}". Оригінальна продукція, офіційна гарантія та доставка по всій Україні.`;

  const cta = 'Замовляйте онлайн на Avto-magaz — зручно, швидко, надійно!';
  const description = `${baseDescription} ${cta}`;

  // URL базовый
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';

  // Базовый путь без пагинации
  const basePath = isMainCategory
    ? `/catalog/grid/${categorySlug}`
    : `/catalog/grid/${categorySlug}/${brandSlug}`;

  // CANONICAL:
  // Для главной категории всегда без пагинации (никаких /page-N)
  // Для подкатегорий всегда с пагинацией (даже для page=1 обязательно /page-1)
  const canonicalUrl = isMainCategory
    ? `${baseUrl}${basePath}`
    : `${baseUrl}${basePath}/page-${pageNumber}`;

  // OG URL — всегда с пагинацией, чтобы соцсети вели на реальную страницу
  const ogUrl = isMainCategory
    ? `${baseUrl}${basePath}`
    : `${baseUrl}${basePath}/page-${pageNumber}`;

  // Изображение для OG
  const image = categoryData.img || '/meta/og-image.jpg';

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: ogUrl,
      siteName: 'Avto-magaz',
      type: 'website',
      locale: 'uk_UA',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${baseTitle} | Інтернет-магазин Avto-magaz`,
        },
      ],
    },
    twitter: {
      title: fullTitle,
      description,
      card: 'summary_large_image',
      images: [image],
    },
    keywords: [
      capitalizedCategory,
      brand,
      'купити',
      'доставка',
      'оригінал',
      'ціна',
      'магазин автотоварів',
      'Avto-magaz',
    ]
      .filter(Boolean)
      .join(', '),
  };
};
