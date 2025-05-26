'use client';

import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

import { cn } from '@/utils';

import { FormPhoneInputProps } from './types';

export const FormPhoneInput: React.FC<FormPhoneInputProps> = ({
  config: { name, label, validationOptions },
  errors,
  control,
  inputClassName,
  trigger,
}) => {
  const isError = errors?.[name];
  const errorMessage = errors?.[name]?.message;
  const isRequiredField = validationOptions?.required?.value;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: validationOptions?.required || 'Це поле обовʼязкове',
        validate: value => {
          const cleaned = value.replace(/\D/g, ''); // видаляємо все, крім цифр
          if (cleaned.length < 12) return 'Невірний номер телефону';
          return true;
        },
        ...validationOptions,
      }}
      render={({ field }) => {
        return (
          <label className="relative w-full text-secondaryText">
            <p className="mb-1 flex">
              {isRequiredField ? (
                <span className="mr-1 block leading-none text-red">*</span>
              ) : (
                ''
              )}
              {label}
            </p>

            <span className="relative block">
              <PatternFormat
                type="tel"
                className={cn(
                  'block w-full rounded-md border border-secondaryText/50 px-2 py-1 font-geologica text-[16px] text-secondaryText',
                  { 'border-error bg-rose-200 text-error': errorMessage },
                  {
                    'bg-green-200':
                      !errorMessage &&
                      field.value &&
                      field.value.trim()?.length > 0,
                  },
                  inputClassName,
                )}
                aria-invalid={errors[name] ? 'true' : 'false'}
                format="+38 (###) ### ## ##"
                allowEmptyFormatting
                mask="_"
                onChange={async e => {
                  field.onChange(e);

                  await trigger(name);
                }}
                onBlur={async () => {
                  field.onBlur();

                  await trigger(name);
                }}
                name={field.name}
                value={field.value}
              />
            </span>

            {isError ? (
              <span
                role="alert"
                id={`errorMessage${name}`}
                className="absolute -bottom-3.5 left-0 rounded-md border border-error bg-rose-100 p-1 text-[12px] text-error"
              >
                {errorMessage}
              </span>
            ) : null}
          </label>
        );
      }}
    />
  );
};
