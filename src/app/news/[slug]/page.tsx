// app/news/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { newsData } from '../newsData';
import { BackBtn } from '@/components/ui';

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const news = newsData.find(el => {
    return el.slug === slug;
  });

  if (!news) return notFound();

  return (
    <>
      <section className="section bg-lightBg">
        <div className="container max-w-4xl py-16">
          <div className="mb-8 flex justify-between">
            <BackBtn text="Повернутись до всіх новин та акцій" />
            <p className="mb-2 text-sm text-gray-500">
              {new Date(news.date).toLocaleDateString('uk-UA')}
            </p>
          </div>
          <h1 className="mb-6 text-3xl font-bold text-secondaryText">
            {news.title}
          </h1>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={news.image}
            alt={news.title}
            className="mb-8 w-full rounded-xl object-cover"
          />

          <div className="prose max-w-none text-lg text-gray-800">
            {news.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
