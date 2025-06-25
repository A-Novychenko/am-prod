import { SingleProductInfoProps } from './types';

export const SingleProductInfo: React.FC<SingleProductInfoProps> = ({
  product: {
    brand,
    name,
    article,
    tecdoc_article,
    count_warehouse_3,
    count_warehouse_4,
    category,
    description,
  },
  isOutOfStock,
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
        {isOutOfStock && (
          <span className="text-rose-800">Немає в наявності</span>
        )}

        {!isOutOfStock && (
          <span
            className={
              count_warehouse_3 !== '0' ? 'text-green-600' : 'text-orange-600'
            }
          >
            {count_warehouse_3 !== '0'
              ? ` В наявності ${count_warehouse_3} шт`
              : ` Поставка 7днів, на складі ${count_warehouse_4}шт`}
          </span>
        )}
      </p>
    </div>
  );
};
