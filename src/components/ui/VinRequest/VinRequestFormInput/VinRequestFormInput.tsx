'use client';

import { useState } from 'react';

import { cn } from '@/utils';

import staticData from '@/data/common.json';

import { VinRequestFormInputProps } from './types';

export const VinRequestFormInput: React.FC<VinRequestFormInputProps> = ({
  config: { name, label, placeholder, validationOptions },
  register,
  errors,
  trigger,
  inputType = 'text',
  inputClassName,
  wrapClassName,
}) => {
  const isError = errors?.[name];

  const errorMessage = errors?.[name]?.message;

  const { customErrors } = staticData.vinRequestForm.engine;
  const [engineInputError, setEngineInputError] = useState<string | null>(null);

  const registerOptions = () => {
    return {
      ...validationOptions,

      onChange: () => {
        trigger(name);
      },
      onBlur: () => {
        trigger(name);
      },
      pattern: {
        value: validationOptions?.pattern
          ? new RegExp(validationOptions.pattern.value)
          : new RegExp(''),
        message: validationOptions?.pattern
          ? validationOptions?.pattern?.message
          : '',
      },
    };
  };

  const handleEngineInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (name === 'engine') {
      setEngineInputError(null);
      const input = e.target;

      if (/[^\d.,]/.test(input.value)) {
        setEngineInputError(customErrors.invalidValue);
      }

      if (input.value.length > 5) {
        setEngineInputError(customErrors.maxLength);
      }

      // Очищаємо значення
      input.value = input.value
        .replace(/[^\d.,]/g, '')
        .trim()
        .slice(0, 5);
    }
  };

  return (
    <label className={cn('relative text-secondaryText', wrapClassName)}>
      <p className="mb-1">{label}</p>

      <input
        aria-required={false}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `errorMessage${name}` : undefined}
        {...register(name, { ...registerOptions() })}
        type={inputType}
        className={cn(
          'w-full rounded-md border border-secondaryText/50 px-2 py-1 text-[16px] text-secondaryText',
          { 'border-error text-error': errorMessage },
          { 'border-error text-error': engineInputError },
          inputClassName,
        )}
        placeholder={placeholder}
        onInput={handleEngineInput}
      />

      {isError || engineInputError ? (
        <span
          role="alert"
          id={`errorMessage${name}`}
          className="absolute -bottom-2 left-0 z-50 w-[300px] rounded-md border border-error bg-rose-100 p-1 text-[12px] text-error"
        >
          {errorMessage || engineInputError}
        </span>
      ) : null}
    </label>
  );
};
