import { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL as string;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/in-progress',
          '/cart',
          '/checkout',
          '/checkout/result',
          '/index.php',
          '/*.php$',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemaps/sitemap-index.xml`,
  };
}
