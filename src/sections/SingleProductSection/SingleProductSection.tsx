import {
  BackBtn,
  SingleProductImgBox,
  SingleProductInfo,
  SingleProductPrice,
} from '@/components/ui';

import { CartItem } from '@/context/CartProvider/types';

export const SingleProductSection: React.FC<{ product: IASGProduct }> = ({
  product,
}) => {
  const {
    _id,
    id,
    brand,
    name,
    img,
    count_warehouse_3,
    count_warehouse_4,
    price_promo,
    price,
    article,
  } = product;

  const isOutOfStock = count_warehouse_3 === '0' && count_warehouse_4 === '0';
  const hasPromo = price_promo !== null && price_promo > 0;

  const cartItem: CartItem = {
    _id,
    id,
    brand,
    name,
    price,
    price_promo,
    quantity: 1,
    img: img[0],
    availability: count_warehouse_3,
    availabilityLviv: count_warehouse_4,
    article,
  };

  const makeName = ({
    name,
    brand,
  }: {
    name: string;
    brand: string;
  }): string => {
    const nameHasBrand = name
      .trim()
      .toLowerCase()
      .includes(brand.trim().toLowerCase());
    return nameHasBrand ? name : `${brand} ${name}`;
  };

  return (
    <section className="section flex grow bg-mediumBg py-10 sm:py-14">
      <div className="container">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          {makeName({ brand, name })}
        </h2>

        <BackBtn className="mb-6" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <SingleProductImgBox img={img} name={name} />

          <div className="flex flex-col justify-between">
            <SingleProductInfo product={product} isOutOfStock={isOutOfStock} />

            <SingleProductPrice
              isOutOfStock={isOutOfStock}
              hasPromo={hasPromo}
              price={price}
              pricePromo={price_promo}
              cartItem={cartItem}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
