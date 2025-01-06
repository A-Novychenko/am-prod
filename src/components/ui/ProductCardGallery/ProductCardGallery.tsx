import React from 'react';
import Image from 'next/image';

import { BuyBtn } from '@/components/ui';

import { CartItem } from '@/context/CartProvider/types';
import { ProductCardGalleryProps } from './types';

const IMG_DEFAULT =
  'https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707868800&semt=sph';

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

const ProductCardGallery: React.FC<ProductCardGalleryProps> = async ({
  product,
}) => {
  const {
    id,
    brand,
    article,
    name,
    description,
    price,
    count_warehouse_3,
    img,
  } = product;

  const image = img && img?.length > 0 ? img[0] : IMG_DEFAULT;
  const countWarehouse = count_warehouse_3 === '0' ? ' ' : count_warehouse_3;

  const cartItem: CartItem = {
    id,
    name,
    price,
    quantity: 1,
    img: image,
  };

  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-[8px] bg-lightBg  md:w-[298px]">
      <div className="h-[200px]  md:h-[298px]">
        <Image
          src={image}
          width={298}
          height={298}
          alt={name}
          className="block size-full object-contain"
          placeholder="blur"
          blurDataURL={IMG_DEFAULT}
        />
      </div>

      <div className="w-full p-4 pt-0 text-[14px]/normal">
        <p>{brand}</p>

        <h3 className="mb-2 line-clamp-2 h-[42px] overflow-hidden text-ellipsis text-[14px]/normal font-semibold uppercase leading-[1.5] text-secondaryText">
          {name}
        </h3>

        <p className="mb-4 line-clamp-3  h-[63px] overflow-hidden text-ellipsis  font-normal  text-secondaryText">
          {description}
          {description}
          {description}
        </p>
        <p className="line-clamp-2 overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
          {`Артикул: ${article}`}
        </p>

        <p className="mb-1 overflow-hidden text-ellipsis text-right text-[20px] font-bold uppercase leading-[1.6] text-darkBlueText">
          {price} грн
        </p>

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
  );
};

export default ProductCardGallery;
