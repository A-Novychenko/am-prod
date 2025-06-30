import { getProductData } from '@/actions/servicesAPI';

export const makeProductMetaData = async (slug: string) => {
  const match = slug.match(/--([a-f0-9]{24})$/i);
  const id = match?.[1];

  if (!id) return { title: 'Товар не знайдено | Avto-magaz' };

  let product: IASGProduct | null = null;

  try {
    product = await getProductData(id);
  } catch {
    return { title: 'Помилка завантаження товару | Avto-magaz' };
  }

  if (!product) {
    return { title: 'Товар не знайдено | Avto-magaz' };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || '';
  const fullUrl = `${baseUrl}/product/${slug}`;
  const image = product.img?.[0] || '/meta/og-image.jpg';

  const capitalizedName =
    product.name.charAt(0).toUpperCase() + product.name.slice(1);
  const brand = product.brand.toUpperCase();

  const title = `${capitalizedName} — купити ${brand} за вигідною ціною | Avto-magaz`;
  const description = `${brand} ${product.name} — оригінальна продукція: ${product.description}. Доставка по Україні, гарантія якості. Замовляйте онлайн на Avto-magaz.`;
  const keywords = [
    product.name,
    brand,
    product.article,
    'купити',
    'ціна',
    'доставка',
    'оригінал',
    'автомасло',
    'автохімія',
    'Avto-magaz',
  ].join(', ');

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Avto-magaz',
      type: 'website',
      locale: 'uk_UA',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${product.name} | ${brand}`,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [image],
    },
    keywords,
  };
};
