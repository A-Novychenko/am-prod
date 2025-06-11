import { generateSlugName } from '@/utils';

interface GenerateProductPathProps {
  brand?: string;
  name: string;
  _id: string;
}

export const generateProductPath = ({
  brand = '',
  name,
  _id,
}: GenerateProductPathProps): string => {
  let cleanedName = name;

  if (brand) {
    const brandPattern = new RegExp(`\\b${brand}\\b`, 'i'); // слово целиком, без чувствительности к регистру
    if (brandPattern.test(name)) {
      cleanedName = name.replace(brandPattern, '').replace(/\s+/g, ' ').trim(); // удалить и очистить лишние пробелы
    }
  }

  const slugParts = [brand, cleanedName].filter(Boolean).map(generateSlugName);
  const slug = slugParts.join('-');

  return `/product/${slug}--${_id}`;
};
