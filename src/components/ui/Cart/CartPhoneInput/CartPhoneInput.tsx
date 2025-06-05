'use client';

import { PatternFormat } from 'react-number-format';

import { cn } from '@/utils';

import { CartPhoneInputProps } from './types';

export const CartPhoneInput: React.FC<CartPhoneInputProps> = ({
  value,
  onChange,
  handleValidationPhone,
  errors,
  className,
  showLabel = true,
}) => {
  return (
    <label
      className={cn(
        'relative block pb-5 text-sm font-medium text-gray-700',
        className,
      )}
    >
      {showLabel && (
        <>
          Телефон <span className="text-red">*</span>
        </>
      )}

      <PatternFormat
        id="phone"
        name="phone"
        type="tel"
        format="+38 (###) ### ## ##"
        allowEmptyFormatting
        mask="_"
        value={value}
        onChange={e => {
          onChange(e);
          handleValidationPhone(e.target.value);
        }}
        onBlur={e => handleValidationPhone(e.target.value)}
        className={cn(
          'mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500',
          { 'border-red bg-rose-100': errors.phone },
        )}
        required
      />
      {errors.phone && (
        <p className="absolute bottom-0 text-[12px] text-red">
          {'Введіть коректний телефон'}
        </p>
      )}
    </label>
  );
};
