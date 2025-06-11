import { MetadataRoute } from 'next';
import { getMainCategories, getCategories } from '@/actions/servicesAPI';

const BASE_URL = process.env.BASE_URL as string;

const fetchCategories = async (): Promise<string[]> => {
  const mainCategoriesUrls: string[] = [];
  const categoriesUrls: string[] = [];

  const mainCategories = await getMainCategories();
  const mainCategoriesIds: number[] = mainCategories.map(
    ({ id }: { id: number }) => {
      mainCategoriesUrls.push(`/categories/${id}`);
      return id;
    },
  );

  // Отримаємо всі підкатегорії одночасно
  await Promise.all(
    mainCategoriesIds.map(async id => {
      const cats = await getCategories(id);
      cats?.forEach((el: { id: string }) => {
        categoriesUrls.push(`/categories/${id}/${el.id}`);
      });
    }),
  );

  return [...mainCategoriesUrls, ...categoriesUrls];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BASE_URL;

  const paths = [
    '',
    '/cart',
    '/checkout',
    '/search-products',
    '/product',
    '/vin-request',
  ];

  const staticUrls = paths.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const categoriesPaths = await fetchCategories();
  const categoriesUrls = categoriesPaths.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticUrls, ...categoriesUrls];
}
