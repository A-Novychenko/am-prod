import { BuyBtn } from '@/components/ui';

import { SingleProductPriceProps } from './types';

export const SingleProductPrice: React.FC<SingleProductPriceProps> = ({
  isOutOfStock,
  hasPromo,
  pricePromo,
  price,
  cartItem,
}) => {
  return (
    <div className="space-y-4 rounded-lg border bg-gray-50 p-6 shadow-sm">
      {hasPromo ? (
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start xl:gap-10">
          <div>
            <p className="text-sm text-gray-500">Акційна ціна</p>
            <p className="text-[32px] font-extrabold text-red">
              {pricePromo} грн
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Звичайна ціна</p>
            <p className="text-lg text-darkBlueBg line-through">{price} грн</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center gap-10">
          <p className="text-[32px] font-extrabold text-darkBlueBg">
            {price} грн
          </p>
        </div>
      )}

      <BuyBtn cartItem={cartItem} disabled={isOutOfStock} />
    </div>
  );
};
