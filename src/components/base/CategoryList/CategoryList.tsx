import { CategoryCard } from '@/components/ui';

import { cn, generateSlugName } from '@/utils';

import { CategoryListProps } from './types';

import styles from './CategoryList.module.css';
import { Fragment } from 'react';

export const CategoryList: React.FC<CategoryListProps> = ({
  data,
  link,
  page,
  isMainCategory = false,
}) => {
  return (
    <ul className="flex flex-col gap-5 xl:flex xl:flex-row xl:flex-wrap">
      {data &&
        data.map(({ name, id, img, hasChildren, hasProducts }, idx) => {
          const isLinkAvailable = `${link ? `/${link}` : ''}/${generateSlugName(name)}--${id}`;

          const isPageAvailable = `${page ? `/page-${page}` : ''}`;

          const catWithCats = `${isLinkAvailable}${isPageAvailable}`;

          const catWithProducts = `${isLinkAvailable}/${generateSlugName(name)}--${id}/page-1`;

          const isMainCatWoCatWithProducts = isMainCategory && !hasChildren;

          const resultLink = isMainCatWoCatWithProducts
            ? catWithProducts
            : catWithCats;

          const isEmptyCat = !hasProducts && !hasChildren;

          return (
            <Fragment key={idx}>
              {!isEmptyCat && (
                <li
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
                    link={resultLink}
                    img={img ? img : undefined}
                  />

                  {/* {hasChildren ? (
                    <p>Есть подкатегории</p>
                  ) : (
                    <p>Нет подкатегорий</p>
                  )}
                  {hasProducts ? <p>Есть продукты</p> : <p>Нет продуктов</p>}
                  {isEmptyCat && <p>Ничего нет</p>} */}
                </li>
              )}
            </Fragment>
          );
        })}
    </ul>
  );
};
