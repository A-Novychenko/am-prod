import { CategoryCard } from '@/components/ui';

import { CategoryListProps } from './types';

export const CategoryList: React.FC<CategoryListProps> = ({ data, path }) => {
  return (
    <ul className="flex flex-col gap-10 xl:flex xl:flex-row xl:flex-wrap">
      {data &&
        data.map(({ name, id }, idx) => (
          <li key={idx} className="scale-100 transition-all hover:scale-105">
            <CategoryCard
              id={id}
              name={name}
              nameCat={name}
              link={`${path}/${id}`}
            />
          </li>
        ))}
    </ul>
  );
};
