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

  console.log('validationOptions', validationOptions);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: validationOptions?.required || 'Це поле обовʼязкове',
        ...validationOptions,
      }}
      render={({ field }) => (
        <label className="relative mb-2 text-primaryText">
          <p className="mb-1 flex">
            {isRequiredField ? (
              <span className="mr-1 block text-[24px] leading-none text-red">
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
                'block w-full rounded-md border border-transparent px-2 py-1 pl-10 font-geologica text-[16px] text-secondaryText',
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
              format="(###) ### ## ##"
              onChange={async e => {
                field.onChange(e); // Обробка значення
                // Викликаємо валідацію для поля після кожної зміни
                await trigger(name);
              }}
              onBlur={async () => {
                field.onBlur(); // Обробка втрати фокусу
                // Викликаємо валідацію для поля після втрати фокусу
                await trigger(name);
              }}
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
              className="absolute -bottom-3.5 left-0 rounded-md border border-error bg-rose-100 p-1 text-[12px] text-error"
            >
              {errorMessage}
            </span>
          ) : null}
        </label>
      )}
    />
  );
};
