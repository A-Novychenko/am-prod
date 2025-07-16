/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { newsData } from './newsData';

export default function NewsPage() {
  const news = newsData;

  return (
    <>
      {/* e5d2cb43efb04745abf19514edb10ab3 */}
      {/* News List */}
      <section className="section bg-lightBg">
        <div className="container py-16">
          <div className="mb-10">
            <h1 className="mb-4 text-4xl font-bold">Новини та акції</h1>
            <p className="text-secondaryText">
              Дізнавайтеся першими про спеціальні пропозиції, новинки та події в
              Avto-Magaz.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {news.map(item => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="block overflow-hidden rounded-xl bg-white shadow transition-transform hover:scale-[1.01]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6">
                  <p className="mb-2 text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString('uk-UA')}
                  </p>
                  <h2 className="mb-2 text-xl font-semibold text-secondaryText">
                    {item.title}
                  </h2>
                  <p className="text-gray-700">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
