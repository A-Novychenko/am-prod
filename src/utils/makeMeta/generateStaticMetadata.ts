import { Metadata } from 'next';

import data from '@/data/meta.json';

import type { StaticPageKey, MetaPageData } from '@/types/meta';

const { NEXT_PUBLIC_BASE_URL = '' } = process.env;

export const generateStaticMetadata = (page: StaticPageKey): Metadata => {
  const { stdData } = data;
  const pageData = data[page] as MetaPageData;

  if (!pageData) {
    throw new Error(`❌ No metadata found for page: ${page}`);
  }

  const { title, description, keywords, canonical, noindex } = pageData;
  const { locale, images } = stdData;

  const cleanBaseUrl = NEXT_PUBLIC_BASE_URL.replace(/\/$/, '');
  const pageUrl = `${cleanBaseUrl}${canonical}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(cleanBaseUrl),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: title,
      locale,
      type: 'website',
      images,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images,
    },
    manifest: '/meta/site.webmanifest',
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, nocache: true },
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
      apple: [{ url: '/meta/apple-touch-icon.png', type: 'image/png' }],
      other: [{ rel: 'apple-touch-icon', url: '/meta/apple-touch-icon.png' }],
    },
  };
};
