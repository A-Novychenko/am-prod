import Image from 'next/image';

import { BuyBtn } from '@/components/ui';

import { cn } from '@/utils';

import staticData from '@/data/common.json';

import { CartItem } from '@/context/CartProvider/types';
import { ProductCardListProps } from './types';

// article: '216671';
// banner: false;
// brand: 'ELF';
// category: 'ELF/TOTAL';
// category_id: 16;
// cid: '0359914';
// count_warehouse_3: '>10';
// createdAt: '2024-03-05T20:19:26.443Z';
// description: '';
// id: 337575;
// img: [
//   'https://cdn.online.asg.ua/images/products/0359914/805_805/3_ven_0359914_1692950039.jpg',
// ];
// name: 'EVOLUTION 700 TURBO DIESEL 10W40 1L (x12)';
// price: 271;
// price_promo: null;
// sale: false;
// tecdoc_article: '216671';
// updatedAt: '2025-01-03T11:59:49.939Z';
// _id: '65e77e4e5187d0e82e6b13e7';

export const ProductCardList: React.FC<ProductCardListProps> = ({
  product,
}) => {
  const {
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
    id,
    name,
    price,
    price_promo,
    quantity: 1,
    img: image,
    article,
    availability: count_warehouse_3,
  };

  return (
    <div
      className={cn('flex overflow-hidden rounded-[8px] bg-lightBg', {
        'bg-saleBg': price_promo,
      })}
    >
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

      <div className="flex grow gap-4 p-6">
        <div className="smOnly:w-full">
          <div className="mb-2 overflow-hidden text-[16px] font-semibold uppercase leading-[1.5] text-secondaryText">
            <p>{brand}</p>

            <p>{name}</p>
          </div>

          <p className="mb-4 line-clamp-[7] w-[668px] overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
            {description}
          </p>
        </div>

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
            {count_warehouse_3 === '0' ? (
              <span className="text-rose-800">Немає в наявності</span>
            ) : (
              <span className="text-[14px] text-green-500">
                В наявності {countWarehouse}шт
              </span>
            )}
          </p>

          <BuyBtn disabled={count_warehouse_3 === '0'} cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};
