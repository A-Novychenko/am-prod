import { SingleProductInfoProps } from './types';

export const SingleProductInfo: React.FC<SingleProductInfoProps> = ({
  product: {
    brand,
    name,
    article,
    tecdoc_article,
    count_warehouse_3,
    category,
    description,
  },
  isAvailable,
}) => {
  return (
    <div className="mb-6 space-y-4 text-base text-gray-800">
      <p>
        <span className="font-semibold">Артикул:</span>{' '}
        <span className="font-mono">{article}</span>
      </p>
      <p>
        <span className="font-semibold">TecDoc артикул:</span> {tecdoc_article}
      </p>
      <p>
        <span className="font-semibold">Бренд:</span> {brand}
      </p>
      <p>
        <span className="font-semibold">Категорія:</span> {category}
      </p>
      <p>
        <span className="font-semibold">Опис:</span>{' '}
        {(description && description.trim()) || `${brand} ${name}`}
      </p>

      <p className="mb-4 overflow-hidden text-ellipsis text-[16px] font-bold uppercase leading-[1.6]">
        <span className={isAvailable ? 'text-green-600' : 'text-rose-800'}>
          {isAvailable
            ? ` В наявності ${count_warehouse_3} шт`
            : 'Немає в наявності'}
        </span>
      </p>
    </div>
  );
};
