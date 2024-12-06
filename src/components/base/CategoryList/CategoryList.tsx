import { CategoryCard } from '@/components/ui';

import { cn } from '@/utils/cn';

import { CategoryListProps } from './types';

import styles from './CategoryList.module.css';

export const CategoryList: React.FC<CategoryListProps> = ({ data, path }) => {
  return (
    <ul className="flex flex-col gap-5 xl:flex xl:flex-row xl:flex-wrap">
      {data &&
        data.map(({ name, id, img }, idx) => (
          <li
            key={idx}
            className={cn(
              'scale-100 transition-all hover:scale-105',
              styles.card,
            )}
          >
            <CategoryCard
              id={id}
              name={name}
              nameCat={name}
              link={`${path}/${id}`}
              img={img ? img : undefined}
            />
          </li>
        ))}
    </ul>
  );
};
