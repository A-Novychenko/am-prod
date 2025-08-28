import { cn, currencyFormatted } from '@/utils';

import { useCart } from '@/context';

import { CartSummaryProps } from './types';

export const CartSummary: React.FC<CartSummaryProps> = ({ className = '' }) => {
  const { items, totalAmount, totalDiscount, totalAmountWithDiscount } =
    useCart();

  const totalAmountFormatted: string = currencyFormatted(totalAmount);
  const totalDiscountFormatted: string = currencyFormatted(totalDiscount);
  const totalAmountWithDiscountFormatted: string = currencyFormatted(
    totalAmountWithDiscount,
  );

  return (
    <div className={cn('text-right font-bold', className)}>
      <p className="mb-1 font-semibold md:mb-4 xl:text-[18px]">
        Товарів у кошику: {items.length}
      </p>

      <p
        className={cn({
          'font-normal': totalDiscount > 0,
          'text-xl font-bold text-red': totalAmount < 500,
        })}
      >
        Сума: {totalAmountFormatted}
      </p>

      {totalDiscount > 0 && (
        <>
          <p className="mt-1 text-green-600 xl:text-[18px]">
            Знижка: {totalDiscountFormatted}
          </p>

          <p className="md:my-2  xl:text-[18px]">
            Сума зі знижкою: {totalAmountWithDiscountFormatted}
          </p>
        </>
      )}
    </div>
  );
};
