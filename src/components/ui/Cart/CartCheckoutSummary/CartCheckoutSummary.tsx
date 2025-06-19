import { CartSummary, CartCheckoutBtns, Recaptcha } from '@/components/ui';

import { cn } from '@/utils';

import { CartCheckoutSummaryProps } from './types';

export const CartCheckoutSummary: React.FC<CartCheckoutSummaryProps> = ({
  hasContactsData,
  checkoutState: {
    name,
    phone,
    email,
    comment,
    city,
    postOffice,
    deliveryMethod,
    paymentMethod,
  },
  hasUnavailableItem,
  handleSubmitCart,
  setCaptchaToken,
  recaptchaRef,
  errors,
  recaptchaError,
  setRecaptchaError,
}) => {
  return (
    <div className="sticky bottom-0 top-[initial] flex gap-2 xl:relative xl:w-[300px] xl:gap-6">
      <div
        className={cn(
          'top-0 flex h-fit w-full flex-col gap-2 rounded-[16px] border border-transparent  bg-saleBg px-3 py-4 shadow-customLight xl:sticky xl:top-8 xl:gap-6',
          { 'border-red': errors.name || errors.phone },
        )}
      >
        <CartSummary className="w-full text-left" />
        {(hasContactsData || errors.name || errors.phone) && (
          <div className="text-[12px] xl:text-[16px]">
            <p className="font-bold smOnly:hidden">Контактні дані:</p>
            {name && (
              <p>
                <span className="font-bold">Імʼя: </span> {name}
              </p>
            )}
            {errors.name && <p className="text-red">Введіть імʼя</p>}
            {phone && (
              <p>
                <span className="font-bold">Телефон: </span> {phone}
              </p>
            )}
            {errors.phone && <p className="text-red">Введіть телефон</p>}
            {email && (
              <p>
                <span className="font-bold">Емейл: </span> {email}
              </p>
            )}
            {comment && (
              <p className="line-clamp-3 smOnly:hidden">
                <span className="font-bold"> Коментар: </span> {comment}
              </p>
            )}
          </div>
        )}
        <div className="text-[12px] xl:text-[16px]">
          <p>
            <span className="font-bold">Спосіб доставки: </span>{' '}
            {/* {deliveryMethod === 'pickup' ? 'Самовивіз' : 'Нова пошта'} */}
            Нова пошта
          </p>
          {deliveryMethod === 'post' && (
            <>
              {city && (
                <p>
                  <span className="font-bold">Місто: </span>
                  {city}
                </p>
              )}
              {postOffice && (
                <p>
                  <span className="font-bold"> Відділення: </span>
                  {postOffice}
                </p>
              )}
            </>
          )}
        </div>
        <p className="text-[12px] xl:text-[16px]">
          <span className="font-bold">Спосіб оплати:</span>{' '}
          {paymentMethod === 'card' && 'Картою'}
          {paymentMethod === 'cash' && 'Готівка'}
          {paymentMethod === 'prepayment' && 'Передплата'}
          {paymentMethod === 'cod' && 'Післяоплата'}
        </p>

        <div className="flex flex-col items-center justify-center">
          <Recaptcha
            ref={recaptchaRef}
            formId="checkout"
            siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={token => {
              setCaptchaToken(token);
              setRecaptchaError(null);
            }}
            size="compact"
          />

          {recaptchaError && (
            <div className="mt-2 flex items-center justify-center gap-2 text-sm text-red">
              <span>{recaptchaError}</span>
            </div>
          )}
        </div>

        <CartCheckoutBtns
          hasUnavailableItem={hasUnavailableItem}
          handleSubmitCart={handleSubmitCart}
          errors={errors}
        />
      </div>
    </div>
  );
};
