import Image from 'next/image';
import { BuyBtn } from '../BuyBtn';

export const MainBannerCard: React.FC<IBannerProduct> = ({
  id,
  // cid,
  category,
  // category_id,
  // brand,
  // article,
  // tecdoc_article,
  name,
  description,
  price,
  price_sale,
  count_warehouse_3,
  img,
}) => {
  const cartItem = {
    id,
    name,
    price: Number((Number(price) * 1.1).toFixed(0)),
    quantity: 1,
    img,
  };

  return (
    // <div className="flex h-[440px] w-full flex-col items-center justify-between rounded-2xl  p-4 xl:h-[640px] xl:p-10">
    <div className="flex size-full flex-col items-center justify-between  rounded-2xl bg-lightBg p-4 xl:p-10">
      <div className="h-[150px] xl:h-[250px] smOnly:mb-4">
        <div className="h-[150px] xl:size-[250px]">
          <Image
            src={img}
            width={300}
            height={250}
            alt={name}
            priority
            className="block size-full shrink-0 object-contain"
          />
        </div>
      </div>

      {/* <div className="flex flex-col justify-between xl:h-[220px]"> */}
      <div>
        <div>
          <p className="mb-1 line-clamp-1 xl:text-[24px]">{`${category} ${name}`}</p>
          <p className="mb-1 line-clamp-1">{description}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="mb-4 flex justify-between">
            <div className="flex gap-2">
              <p className="mb-1 text-[18px] text-rose-800 line-through">
                {price} грн
              </p>
              <p className="mb-1 text-[28px] font-bold text-green-700">
                {price_sale} грн
              </p>
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
          {/* <p className="hidden">{_id}</p> */}

          <BuyBtn disabled={count_warehouse_3 === '0'} cartItem={cartItem} />
        </div>
      </div>
    </div>
  );
};
