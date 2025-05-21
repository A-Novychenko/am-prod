'use client';

import { DeliveryFormProps, DeliveryMethod } from './types';

export const CartDeliveryForm: React.FC<DeliveryFormProps> = ({
  deliveryMethod,
  setDeliveryMethod,
  className = '',
}) => {
  const handleChange = (method: DeliveryMethod) => {
    setDeliveryMethod(method);
  };

  return (
    <div className={className}>
      <div className="flex flex-col gap-4 rounded-[16px] bg-white p-4">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Виберіть спосіб доставки
        </h2>
        <div className="flex flex-col gap-2">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={deliveryMethod === 'pickup'}
              onChange={() => handleChange('pickup')}
              className="size-5 text-darkBlueText focus:ring-darkBlueText"
            />
            <span className="text-sm text-gray-700">Самовивіз</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="post"
              checked={deliveryMethod === 'post'}
              onChange={() => handleChange('post')}
              className="size-5 text-darkBlueText focus:ring-darkBlueText"
            />
            <span className="text-sm text-gray-700">Відправка поштою</span>
          </label>
        </div>
      </div>

      <p className="p-4">
        Вибраний спосіб доставки:
        <strong>
          {deliveryMethod === 'pickup' ? 'Самовивіз' : 'Відправка поштою'}
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
              //   value={formData.name}
              //   onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Відділення
            </label>
            <input
              id="department"
              name="department"
              type="text"
              //   value={formData.name}
              //   onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </form>
      )}
    </div>
  );
};
