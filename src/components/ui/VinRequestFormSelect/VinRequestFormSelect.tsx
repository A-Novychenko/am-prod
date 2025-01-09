'use client';

import { cn } from '@/utils';

import { VinRequestFormSelectProps } from './types';

export const VinRequestFormSelect: React.FC<VinRequestFormSelectProps> = ({
  config: { name, label, options },
  register,

  inputClassName,
}) => {
  return (
    <label className="relative text-primaryText">
      <p className="mb-1">{label}</p>

      <select
        {...register(name)}
        className={cn(
          'w-full rounded-md border border-transparent px-1.5 py-0.5  text-[16px] text-secondaryText',

          inputClassName,
        )}
      >
        {options &&
          options.map(({ value, text }, idx) => (
            <option key={idx} value={value}>
              {text}
            </option>
          ))}
      </select>
    </label>
  );
};
