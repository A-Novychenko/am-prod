import Image from 'next/image';
import Link from 'next/link';

import { BuyBtn } from '@/components/ui';

import { cn, generateProductPath } from '@/utils';

import staticData from '@/data/common.json';

import { CartItem } from '@/context/CartProvider/types';
import { ProductCardListProps } from './types';

export const ProductCardList: React.FC<ProductCardListProps> = ({
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
    count_warehouse_4,
    img,
  } = product;

  const { noImage } = staticData;

  const image = img && img?.length > 0 ? img[0] : noImage;

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
    availabilityLviv: count_warehouse_4,
  };

  return (
    <div
      className={cn('flex overflow-hidden rounded-[8px] bg-lightBg', {
        'bg-saleBg': price_promo,
      })}
    >
      <Link href={generateProductPath({ name, _id, brand })}>
        <div className="h-[200px] shrink-0 p-2 md:h-[298px]">
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

      <div className="flex grow gap-4 p-6">
        <Link href={generateProductPath({ name, _id, brand })}>
          <div className="smOnly:w-full">
            <div className="mb-2 overflow-hidden text-[16px] font-semibold uppercase leading-[1.5] text-secondaryText">
              <p>{brand}</p>

              <p>{name}</p>
            </div>

            <p className="mb-4 line-clamp-[7] w-[668px] overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
              {description}
            </p>
          </div>
        </Link>

        <div className="flex flex-col items-center">
          <p
            className={cn(
              'mb-6 text-[16px] font-normal leading-[1.5] text-secondaryText',
              { 'mb-0': price_promo },
            )}
          >
            {`Артикул: ${article}`}
          </p>

          <div
            className={cn('hidden h-[66px] w-[150px]', {
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

          {!price_promo && (
            <p className="mb-1 overflow-hidden text-ellipsis text-right text-[24px] font-bold uppercase leading-[1.6] text-darkBlueText">
              {price} грн
            </p>
          )}

          {price_promo && (
            <>
              <p className="mb-1 overflow-hidden text-ellipsis text-right text-[24px] font-bold uppercase leading-[1.6] text-red">
                {price_promo} грн
              </p>
              <p className="mb-1 overflow-hidden text-ellipsis text-right text-[16px] font-bold uppercase leading-[1.6] text-darkBlueText line-through">
                {price} грн
              </p>
            </>
          )}

          <p className="mb-4 overflow-hidden text-ellipsis text-right text-[12px] font-bold uppercase leading-[1.6]">
            {count_warehouse_3 === '0' && count_warehouse_4 === '0' ? (
              <span className="text-rose-800">Немає в наявності</span>
            ) : (
              <>
                {count_warehouse_3 !== '0' && (
                  <span className="text-[14px] leading-[0.5] text-green-600">
                    В наявності {count_warehouse_3}шт
                  </span>
                )}
                {count_warehouse_3 === '0' && count_warehouse_4 !== '0' && (
                  <span className="leading-[0.5] tracking-[-0.3px] text-orange-600 ">
                    Поставка 7днів, на складі {count_warehouse_4}шт
                  </span>
                )}
              </>
            )}
          </p>

          <BuyBtn
            disabled={count_warehouse_3 === '0' && count_warehouse_4 === '0'}
            cartItem={cartItem}
          />
        </div>
      </div>
    </div>
  );
};
