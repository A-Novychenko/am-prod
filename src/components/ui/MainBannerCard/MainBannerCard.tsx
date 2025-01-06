import Image from 'next/image';

import { BuyBtn } from '../BuyBtn';

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

export const MainBannerCard: React.FC<ASGProduct> = ({
  id,
  category,
  name,
  description,
  price,
  price_promo,
  count_warehouse_3,
  img,
}) => {
  const image = img && img.length > 0 ? img[0] : IMG_DEFAULT;

  const cartItem = {
    id,
    name,
    price: Number((Number(price) * 1.1).toFixed(0)),
    quantity: 1,
    img: image,
  };

  return (
    <div className="flex size-full flex-col items-center justify-between  rounded-2xl bg-lightBg p-4 xl:p-10">
      <div className="h-[150px] xl:h-[250px] smOnly:mb-4">
        <div className="h-[150px] xl:size-[250px]">
          <Image
            src={image}
            width={300}
            height={250}
            alt={name}
            priority
            className="block size-full shrink-0 object-contain"
          />
        </div>
      </div>

      <div>
        <div>
          <p className="mb-1 line-clamp-1 xl:text-[24px]">{`${category} ${name}`}</p>
          <p className="mb-1 line-clamp-1">{description}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="mb-4 flex justify-between">
            <div className="flex gap-2">
              {price_promo ? (
                <>
                  <p className="mb-1 text-[18px] text-rose-800 line-through">
                    {price} грн
                  </p>
                  <p className="mb-1 text-[28px] font-bold text-green-700">
                    {price_promo} грн
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-1 text-[18px] text-green-700">{price} грн</p>
                </>
              )}
            </div>

            <p className="flex items-center overflow-hidden text-ellipsis text-right text-[12px] font-bold uppercase leading-[1.6]">
              {count_warehouse_3 === '0' ? (
                <span className="text-rose-800">Немає в наявності</span>
              ) : (
                <span className="text-[14px] text-green-500 ">
                  В наявності {count_warehouse_3}шт
                </span>
              )}
            </p>
          </div>

          <BuyBtn disabled={count_warehouse_3 === '0'} cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};
