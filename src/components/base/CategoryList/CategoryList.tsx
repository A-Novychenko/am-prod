import { CategoryCard } from '@/components/ui';

import { cn, generateSlugName } from '@/utils';

import { CategoryListProps } from './types';

import styles from './CategoryList.module.css';

export const CategoryList: React.FC<CategoryListProps> = ({
  data,
  link,
  page,
}) => {
  return (
    <ul className="flex flex-col gap-5 xl:flex xl:flex-row xl:flex-wrap">
      {data &&
        data.map(({ name, id, img }, idx) => {
          const isLinkAvailable = `${link ? `/${link}` : ''}/${generateSlugName(name)}--${id}`;

          const isPageAvailable = `${page ? `/page-${page}` : ''}`;
          return (
            <li
              key={idx}
              className={cn(
                'order-3 scale-100 rounded-[16px] shadow-custom transition-all hover:scale-105',
                { 'order-1': id === 1 },
                { 'order-2': id === 5 },
                styles.card,
              )}
            >
              <CategoryCard
                id={id}
                name={name}
                link={`${isLinkAvailable}${isPageAvailable}`}
                img={img ? img : undefined}
              />
            </li>
          );
        })}
    </ul>
  );
};
