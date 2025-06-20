import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BuyBtn } from '@/components/ui';

import { cn, generateProductPath } from '@/utils';

import staticData from '@/data/common.json';

import { CartItem } from '@/context/CartProvider/types';
import { ProductCardGalleryProps } from './types';

export const ProductCardGallery: React.FC<ProductCardGalleryProps> = async ({
  product,
}) => {
  const {
    _id,
    id,
    brand,
    article,
    name,
    description,
    price,
    price_promo,
    count_warehouse_3,
    img,
  } = product;

  const { noImage } = staticData;

  const image = img && img?.length > 0 ? img[0] : noImage;

  const countWarehouse = count_warehouse_3 === '0' ? ' ' : count_warehouse_3;

  const cartItem: CartItem = {
    _id,
    id,
    brand,
    name,
    price,
    price_promo,
    quantity: 1,
    img: image,
    article,
    availability: count_warehouse_3,
  };

  return (
    <div className="relative">
      <div
        className={cn(
          'flex w-full flex-col items-center overflow-hidden rounded-[8px] border border-solid border-transparent bg-lightBg',
          {
            'border-saleBg bg-saleBg': price_promo,
          },
        )}
      >
        <Link href={generateProductPath({ name, _id, brand })}>
          <div className="h-[200px] p-2  md:h-[298px]">
            <Image
              src={image}
              width={298}
              height={298}
              alt={name}
              className="block size-full object-contain"
              placeholder="blur"
              blurDataURL={noImage}
            />
          </div>
        </Link>

        <div className="w-full p-4 pt-0 text-[14px]/normal">
          <Link href={generateProductPath({ name, _id, brand })}>
            <p>{brand}</p>

            <h3 className="mb-2 line-clamp-2 h-[42px] overflow-hidden text-ellipsis text-[14px]/normal font-semibold uppercase leading-[1.5] text-secondaryText">
              {name}
            </h3>

            <p className="mb-4 line-clamp-3  h-[63px] overflow-hidden text-ellipsis break-all font-normal text-secondaryText">
              {description}
            </p>
          </Link>
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
            {`Артикул: ${article}`}
          </p>

          <div className="flex justify-end gap-4">
            <p
              className={cn(
                'mb-1 overflow-hidden text-ellipsis text-right text-[20px] font-bold uppercase leading-[1.6] text-darkBlueText',
                {
                  'text-[16px] line-through': price_promo,
                },
              )}
            >
              {price} грн
            </p>

            {price_promo && (
              <p className="mb-1 overflow-hidden text-ellipsis text-right text-[20px] font-bold uppercase leading-[1.6] text-red">
                {price_promo} грн
              </p>
            )}
          </div>

          <p className="mb-4 overflow-hidden text-ellipsis text-right text-[12px] font-bold uppercase leading-[1.6]">
            {count_warehouse_3 === '0' ? (
              <span className="text-rose-800">Немає в наявності</span>
            ) : (
              <span className="text-[14px] leading-[0.5] text-green-600">
                В наявності {countWarehouse}шт
              </span>
            )}
          </p>

          <BuyBtn disabled={count_warehouse_3 === '0'} cartItem={cartItem} />
        </div>
      </div>

      <div
        className={cn('absolute right-0 top-0 hidden h-[66px] w-[150px]', {
          block: price_promo,
        })}
      >
        <Image
          src="/images/sale.webp"
          width={500}
          height={218}
          alt="Акція"
          className="size-full object-contain"
        />
      </div>
    </div>
  );
};
