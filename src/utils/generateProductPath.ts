import { generateSlugName } from '@/utils';

interface GenerateProductPathProps {
  brand?: string;
  name: string;
  _id: string;
}

const escapeRegExp = (str: string): string =>
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const generateProductPath = ({
  brand = '',
  name,
  _id,
}: GenerateProductPathProps): string => {
  let cleanedName = name;

  if (brand) {
    const safeBrand = escapeRegExp(brand);
    const brandPattern = new RegExp(`\\b${safeBrand}\\b`, 'i'); // безопасно вставляем в RegExp
    if (brandPattern.test(name)) {
      cleanedName = name.replace(brandPattern, '').replace(/\s+/g, ' ').trim(); // удаляем бренд и чистим пробелы
    }
  }

  const slugParts = [brand, cleanedName].filter(Boolean).map(generateSlugName);
  const slug = slugParts.join('-');

  return `/product/${slug}--${_id}`;
};
