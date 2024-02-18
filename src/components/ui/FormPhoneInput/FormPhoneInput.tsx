'use client';

import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

import { cn } from '@/utils/cn';

import { FormPhoneInputProps } from './types';

export const FormPhoneInput: React.FC<FormPhoneInputProps> = ({
  config: { name, label, validationOptions },
  errors,

  control,
  inputClassName,
}) => {
  const isError = errors?.[name];

  const errorMessage = errors?.[name]?.message;

  const isRequiredField = validationOptions?.required;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <label className="relative pb-4 text-primaryText">
          <p className="mb-1 flex">
            {isRequiredField ? (
              <span className="mr-1 block  text-[24px] leading-none text-red">
                *
              </span>
            ) : (
              ''
            )}
            {label}
          </p>
          <span className="relative block">
            <PatternFormat
              type="tel"
              className={cn(
                'block w-full rounded-md border border-transparent p-2 pl-10 font-geologica text-[16px] text-secondaryText',
                { 'text-error': errorMessage },
                {
                  'bg-green-200':
                    !errorMessage &&
                    field.value &&
                    field.value.trim()?.length > 0,
                },
                inputClassName,
              )}
              aria-invalid={errors[name] ? 'true' : 'false'}
              format="(###) ## ## ###"
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
            />
            {true && (
              <span className="absolute left-2 top-1/2 block -translate-y-1/2 font-geologica text-secondaryText">
                +38
              </span>
            )}
          </span>

          {isError ? (
            <span
              role="alert"
              id={`errorMessage${name}`}
              className="absolute bottom-0 left-0 text-[12px] text-error"
            >
              {errorMessage}
            </span>
          ) : null}
        </label>
      )}
    />
  );
};
