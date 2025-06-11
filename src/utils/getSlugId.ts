import { notFound } from 'next/navigation';

export const getSlugId = (slug: string) => {
  const match = slug.match(/^(.+)--(\d+)$/);

  if (!match) {
    return notFound();
  }

  const id = Number(match[2]);

  if (isNaN(id)) {
    return notFound();
  }

  return id;
};
