import Link from 'next/link';

import { PaginationProps } from './types';

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  product,
  category,
  page,
  name,
}) => {
  // Генеруємо масив сторінок для відображення
  const pagesToShow = [];

  if (totalPages > 1) {
    // Завжди додаємо першу сторінку, якщо є більше ніж одна
    pagesToShow.push(1);

    // Додаємо сторінки від поточної -2 до поточної +2
    for (let i = page - 2; i <= page + 2; i++) {
      if (i > 1 && i < totalPages && !pagesToShow.includes(i)) {
        pagesToShow.push(i);
      }
    }

    // Завжди додаємо останню сторінку, якщо її немає в масиві
    if (!pagesToShow.includes(totalPages)) {
      pagesToShow.push(totalPages);
    }

    // Якщо є проміжки між сторінками, додаємо кнопки "..."
    if (!pagesToShow.includes(page - 2) && page - 2 > 1) {
      pagesToShow.unshift('...');
    }
    if (!pagesToShow.includes(page + 2) && page + 2 < totalPages) {
      pagesToShow.push('...');
    }
  } else {
    // Якщо є тільки одна сторінка, не додаємо жодної зайвої
    pagesToShow.push(1);
  }

  // Перевірка, щоб не додавалася порожня п'ята сторінка
  if (totalPages === pagesToShow.length) {
    pagesToShow.pop(); // Видаляємо останню порожню сторінку
  }

  return (
    <div className="mt-10 flex justify-center">
      {pagesToShow.map((p, index) => (
        <Link
          key={index}
          href={`/categories/${category}/${product}?page=${p}&name=${name}`}
          className={`mx-1 rounded-[8px] px-4 py-2 first:mr-6 last:ml-6 smOnly:px-3 smOnly:first:mr-2 smOnly:last:ml-2 ${
            page === p
              ? 'bg-slate-50 text-slate-900'
              : 'bg-slate-700 text-white'
          }`}
        >
          {p === '...' ? <span className="text-white">...</span> : p}
        </Link>
      ))}
    </div>
  );
};
