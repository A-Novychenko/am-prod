import { getCategory } from '@/actions/servicesAPI';
import { getSlugId } from '@/utils';

import metaDefaults from '@/data/meta.json';

// export const dynamic = 'force-dynamic';
// export const fetchCache = 'no-store';
// '"auto" | "force-no-store" | "only-no-store" | "default-no-store" | "default-cache" | "only-cache" | "force-cache" | undefined'.
// export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { viewMode: string; category: string };
}) {
  console.log('meatCat');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const { viewMode, category } = params;

  const [slug] = category.split('--');
  const decodedSlug = decodeURIComponent(slug);
  const id = getSlugId(category);
  const categoryData = await getCategory(id);

  const title =
    categoryData?.seoTitle ||
    `${categoryData?.name || decodedSlug} — Купити автозапчастини | Avto-magaz`;

  const description =
    categoryData?.seoDescription ||
    `Категорія ${categoryData?.name || decodedSlug} — великий вибір автозапчастин в інтернет-магазині Avto-magaz. Надійні бренди, швидка доставка по Україні.`;

  const imageUrl =
    categoryData?.ogImage || categoryData?.image || '/meta/og-image.jpg';

  const fullImageUrl = imageUrl.startsWith('http')
    ? imageUrl
    : `${baseUrl}${imageUrl}`;

  const canonicalUrl = `${baseUrl}/catalog/${viewMode}/${category}`;

  return {
    title,
    description,
    keywords: metaDefaults.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    manifest: '/meta/site.webmanifest',
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: metaDefaults.title,
      locale: metaDefaults.locale,
      type: 'website',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: categoryData?.name || decodedSlug,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    icons: {
      icon: [
        { url: '/meta/favicon.ico' },
        { url: '/meta/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/meta/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        {
          url: '/meta/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/meta/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      shortcut: [{ url: '/meta/favicon.ico' }],
      apple: [{ url: '/meta/apple-touch-icon.png' }],
      other: [
        {
          rel: '/meta/apple-touch-icon.png',
          url: '/meta/apple-touch-icon.png',
        },
      ],
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
