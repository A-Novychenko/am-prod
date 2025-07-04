'use client';

import { DeliveryFormProps } from './types';

export const CartDeliveryForm: React.FC<DeliveryFormProps> = ({
  checkoutState: { deliveryMethod, city, postOffice },
  setCheckoutState,
  className = '',
}) => {
  const handleChange = (method: DeliveryMethod) => {
    setCheckoutState(prev => ({
      ...prev,
      paymentMethod: method === 'post' ? 'prepayment' : 'card',
      deliveryMethod: method,
    }));
  };

  const handleChangeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setCheckoutState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={className}>
      <div className="flex flex-col gap-4 rounded-[16px] bg-white p-4">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Виберіть спосіб доставки
        </h2>
        <div className="flex flex-col gap-2">
          {/* <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={deliveryMethod === 'pickup'}
              onChange={() => handleChange('pickup')}
              className="size-5 text-darkBlueText focus:ring-darkBlueText"
            />
            <span className="text-sm text-gray-700">Самовивіз</span>
          </label> */}
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="post"
              checked={deliveryMethod === 'post'}
              onChange={() => handleChange('post')}
              className="size-5 text-darkBlueText focus:ring-darkBlueText"
            />
            <span className="text-sm text-gray-700">
              Відправка Новою поштою
            </span>
          </label>
        </div>
      </div>

      <p className="p-4">
        Вибраний спосіб доставки:
        <strong className="block">
          {/* {deliveryMethod === 'pickup' ? 'Самовивіз' : 'Відправка Новою поштою'} */}
          Відправка Новою поштою
        </strong>
      </p>

      {deliveryMethod === 'post' && (
        <form className="p-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Населений пункт
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={handleChangeData}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="postOffice"
              className="block text-sm font-medium text-gray-700"
            >
              Відділення
            </label>
            <input
              id="postOffice"
              name="postOffice"
              type="text"
              value={postOffice}
              onChange={handleChangeData}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </form>
      )}
    </div>
  );
};
