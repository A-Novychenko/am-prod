import Image from 'next/image';
import React from 'react';
import { ProductCardProps } from './types';
// import image from 'next/image';

const IMG_DEFAULT =
  'https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707868800&semt=sph';

export const ProductCard: React.FC<ProductCardProps> = async ({ product }) => {
  const {
    // _id,
    // id,
    // cid,
    // category,
    // category_id,
    // brand,
    // article,
    // tecdoc_article,
    name,
    description,
    price_currency_980,
    // price_type_1_currency_980,
    // price_type_2_currency_980,
    // count_warehouse_3,
    // createdAt,
    // updatedAt,
    img,
  } = product;

  return (
    <div className="flex h-[546px] w-[286px] flex-col items-center overflow-hidden rounded-[16px] bg-lightBg">
      <div className="mt-6 size-[234px] p-6">
        <Image
          // src={image}
          src={img ? img : IMG_DEFAULT}
          width={1064}
          height={1064}
          alt={name}
          className="block size-full object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 line-clamp-1 overflow-hidden text-ellipsis text-[16px] font-semibold uppercase leading-[1.5] text-secondaryText">
          {name}
        </h3>
        <p className="mb-4 line-clamp-2 h-[48px] overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
          {description}
        </p>
        <p className="mb-4 overflow-hidden text-ellipsis text-right text-[20px] font-bold uppercase leading-[1.6] text-darkBlueText">
          {`${Number(Number(price_currency_980) * 1.1).toFixed(0)} грн`}
        </p>
        <button
          type="button"
          className="mx-auto block h-[48px] w-[186px] rounded-[8px] bg-darkBlueBg text-[14px] font-bold uppercase leading-[1.7] text-primaryText transition-all hover:bg-darkBg/85"
        >
          Купити
        </button>
      </div>
    </div>
  );
};

// export default ProductCard;
