'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const IMG_DEFAULT =
  'https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707868800&semt=sph';

const SearchProducts = () => {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsParam = searchParams.get('products');
    if (productsParam) {
      // Розбираємо параметр products з URL
      const parsedProducts = JSON.parse(decodeURIComponent(productsParam));
      setProducts(parsedProducts);
    }
  }, [searchParams]);

  console.log('products', products);

  return (
    <>
      <h1>
        {products && products.length > 0
          ? `Знайдено: ${products.length}`
          : 'Нічого не знайдено'}
      </h1>

      <div>
        {products && products.length > 0 ? (
          <ul>
            {products.map((product, index) => {
              const {
                article,
                name,
                description,
                price_currency_980,
                count_warehouse_3,
                img,
              } = product;

              console.log('img', img);

              const image = img && Array.isArray(img) ? img[0] : IMG_DEFAULT;

              return (
                <li key={index}>
                  <div className="flex w-full flex-col items-center overflow-hidden rounded-[16px] bg-lightBg md:h-[546px] md:w-[286px]">
                    <div className="mt-2 h-[200px] p-5 md:size-[234px]">
                      <Image
                        src={image}
                        width={1064}
                        height={1064}
                        alt={name}
                        className="block size-full object-contain"
                      />
                    </div>

                    <div className="p-6 pt-0 smOnly:w-full">
                      <h3 className="mb-2 line-clamp-1 overflow-hidden text-ellipsis text-[16px] font-semibold uppercase leading-[1.5] text-secondaryText">
                        {name}
                      </h3>
                      <p className="mb-4 line-clamp-2 h-[48px] overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
                        {description}
                      </p>
                      <p className="line-clamp-2 overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
                        {`Артикул: ${article}`}
                      </p>
                      <p className="mb-1 overflow-hidden text-ellipsis text-right text-[20px] font-bold uppercase leading-[1.6] text-darkBlueText">
                        {`${Number(Number(price_currency_980) * 1.1).toFixed(0)} грн`}
                      </p>
                      <p className="mb-4 overflow-hidden text-ellipsis text-right text-[12px] font-bold uppercase leading-[1.6]">
                        {count_warehouse_3 === '0' ? (
                          <span className="text-rose-800">
                            Немає в наявності
                          </span>
                        ) : (
                          <span className="text-[14px] text-green-500">
                            В наявності
                          </span>
                        )}
                      </p>
                      <button
                        disabled={count_warehouse_3 === '0'}
                        type="button"
                        className="mx-auto block h-[48px] w-[186px] rounded-[8px] bg-darkBlueBg text-[14px] font-bold uppercase leading-[1.7] text-primaryText transition-all hover:bg-darkBg/85 disabled:bg-slate-500"
                      >
                        Купити
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Продукти не знайдено.</p>
        )}
      </div>
    </>
  );
};

export default SearchProducts;
