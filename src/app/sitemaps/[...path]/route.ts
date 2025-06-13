import { NextRequest } from 'next/server';
import http from 'http';
import https from 'https';

const BACKEND_URL = process.env.SITEMAP_API_URL;

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  const filePath = params.path.join('/');
  const url = `${BACKEND_URL}/sitemaps/${filePath}`;

  const client = url.startsWith('https') ? https : http;

  return new Promise<Response>((resolve, reject) => {
    client
      .get(url, backendRes => {
        if (backendRes.statusCode !== 200) {
          resolve(
            new Response('Not found', { status: backendRes.statusCode || 500 }),
          );
          return;
        }

        const chunks: Uint8Array[] = [];
        backendRes.on('data', chunk => {
          chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
        });

        backendRes.on('end', () => {
          const totalLength = chunks.reduce(
            (sum, chunk) => sum + chunk.length,
            0,
          );
          const merged = new Uint8Array(totalLength);
          let offset = 0;
          for (const chunk of chunks) {
            merged.set(chunk, offset);
            offset += chunk.length;
          }

          resolve(
            new Response(merged, {
              status: 200,
              headers: {
                'Content-Type': 'application/xml',
              },
            }),
          );
        });
      })
      .on('error', err => {
        console.error('Sitemap proxy error:', err);
        reject(new Response('Internal Server Error', { status: 500 }));
      });
  });
}
