import { NextRequest } from 'next/server';

const BACKEND_URL = process.env.SITEMAP_API_URL;

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  const filePath = params.path.join('/');
  const url = `${BACKEND_URL}/sitemaps/${filePath}`;

  try {
    const backendRes = await fetch(url, {
      method: 'GET',

      next: { revalidate: 0 },

      // cache: 'no-store',
    });

    if (!backendRes.ok) {
      return new Response('Not found', { status: backendRes.status });
    }

    const xml = await backendRes.text();

    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control':
          'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });
  } catch (error) {
    console.error('Sitemap fetch error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
