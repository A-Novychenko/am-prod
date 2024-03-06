import { CategoryCard } from '@/components/ui';

import { CategoryListProps } from './types';

export const CategoryList: React.FC<CategoryListProps> = ({ data, path }) => {
  return (
    <ul className="flex flex-wrap gap-10">
      {data &&
        data.map(({ name, id }, idx) => (
          <li key={idx} className="scale-100 transition-all hover:scale-105">
            <CategoryCard id={id} name={name} link={`${path}/${id}`} />
          </li>
        ))}
    </ul>
  );
};
