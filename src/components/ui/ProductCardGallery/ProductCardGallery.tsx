import Image from 'next/image';
import React from 'react';
import { ProductCardGalleryProps } from './types';
import { BuyBtn } from '../BuyBtn';
import { CartItem } from '@/context/CartProvider/types';
// import image from 'next/image';

const IMG_DEFAULT =
  'https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707868800&semt=sph';

//   product {
//   _id: '65e788515187d0e82e6fa76a',
//   id: 508095,
//   cid: '0537732',
//   category: 'ARAL',
//   category_id: 11,
//   brand: 'ARAL',
//   article: '15F471',
//   tecdoc_article: '15F471',
//   name: 'Aral BlueTronic II 10W-40 5Lx4',
//   description: '(НОВА ТАРА HIGHLANDER, старий артикул 15F078) (Заміна замість Aral BlueTronic 10W-40): ACEA A3/B4 • API SP • MB-Freigabe 229.3 • VW 501 01/ 505 00 • Fiat 9.55535-D2',
//   price: 1165,
//   count_warehouse_3: '>10',
//   createdAt: '2024-03-05T21:02:09.663Z',
//   updatedAt: '2024-11-26T09:06:57.826Z',
//   img: [
//     'https://cdn.online.asg.ua/images/products/0537732/805_805/3_ven_0537732_1705485974.jpg'
//   ]
// }

const ProductCardGallery: React.FC<ProductCardGalleryProps> = async ({
  product,
}) => {
  const {
    // _id,
    id,
    // cid,
    // category,
    // category_id,
    brand,
    article,
    // tecdoc_article,
    name,
    description,
    // price_type_1_currency_980,
    // price_type_2_currency_980,
    price,
    count_warehouse_3,
    // createdAt,
    // updatedAt,
    img,
  } = product;

  // console.log('product', product);

  const image = img && img?.length > 0 ? img[0] : IMG_DEFAULT;
  const countWarehouse = count_warehouse_3 === '0' ? ' ' : count_warehouse_3;

  const cartItem: CartItem = {
    id,
    name,
    price: Number((Number(price) * 1.1).toFixed(0)),
    quantity: 1,
    img: image,
  };

  return (
    <div className="flex w-full flex-col items-center overflow-hidden rounded-[8px] bg-lightBg md:h-[600px] md:w-[298px]">
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

      <div className="p-6 pt-0 smOnly:w-full">
        <p>{brand}</p>
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
