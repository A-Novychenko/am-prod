import Image from 'next/image';
import React from 'react';
import { ProductCardProps } from './types';
import { BuyBtn } from '../BuyBtn';
import { CartItem } from '@/context/CartProvider/types';
// import image from 'next/image';

const IMG_DEFAULT =
  'https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707868800&semt=sph';

export const ProductCard: React.FC<ProductCardProps> = async ({ product }) => {
  const {
    // _id,
    id,
    // cid,
    // category,
    // category_id,
    // brand,
    article,
    // tecdoc_article,
    name,
    description,
    price_currency_980,
    // price_type_1_currency_980,
    // price_type_2_currency_980,
    count_warehouse_3,
    // createdAt,
    // updatedAt,
    img,
  } = product;

  // console.log('count_warehouse_3', count_warehouse_3);

  const cartItem: CartItem = {
    id,
    name,
    price: Number((Number(price_currency_980) * 1.1).toFixed(0)),
    quantity: 1,
    img: img ? img : IMG_DEFAULT,
  };

  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-[16px] bg-lightBg md:h-[546px] md:w-[286px]">
      <div className="mt-2 h-[200px] p-5 md:size-[234px]">
        <Image
          // src={image}
          src={img ? img : IMG_DEFAULT}
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
          {/* {`${Number(Number(count_warehouse_3)).toFixed(0)}`} */}
          {count_warehouse_3 === '0' ? (
            <span className="text-rose-800">Немає в наявності</span>
          ) : (
            <span className="text-[14px] text-green-500">В наявності</span>
          )}
        </p>
        {/* <button
          disabled={count_warehouse_3 === '0'}
          type="button"
          className="mx-auto block h-[48px] w-[186px] rounded-[8px] bg-darkBlueBg text-[14px] font-bold uppercase leading-[1.7] text-primaryText transition-all hover:bg-darkBg/85 disabled:bg-slate-500"
        >
          Купити
        </button> */}
        <BuyBtn disabled={count_warehouse_3 === '0'} cartItem={cartItem} />
      </div>
    </div>
  );
};

// export default ProductCard;
