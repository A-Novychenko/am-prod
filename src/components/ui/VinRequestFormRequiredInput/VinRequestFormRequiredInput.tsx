import { cn } from '@/utils';

import { VinRequestFormInputProps } from './types';

export const VinRequestFormRequiredInput: React.FC<
  VinRequestFormInputProps
> = ({
  config: { name, label, placeholder, validationOptions },
  register,
  trigger,
  errors,
  watch,
  inputType = 'text',
}) => {
  const isError = errors?.[name];

  const errorMessage = errors?.[name]?.message;

  const isRequiredField = validationOptions?.required;

  const value = watch(name);

  const isEmptyValue = value && value?.trim().length > 0 ? false : true;

  const registerOptions = () => {
    return {
      ...validationOptions,
      required: isRequiredField,
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

  return (
    <label className="relative pb-2 text-primaryText">
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

      <input
        aria-required={isRequiredField ? true : false}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `errorMessage${name}` : undefined}
        {...register(name, { ...registerOptions() })}
        type={inputType}
        className={cn(
          'mb-2 w-full rounded-md border border-transparent px-2 py-1 font-nunito text-[16px] text-secondaryText',
          { 'border-error text-error': errorMessage },
          { 'bg-green-200': !errorMessage && !isEmptyValue },
          { 'bg-rose-200': errorMessage },
        )}
        placeholder={placeholder}
        onInput={e => {
          if (name === 'vinCode') {
            const input = e.target as HTMLInputElement;
            if (input.value.length > 17) {
              input.value = input.value.trim().slice(0, 17); // Обрізання до 17 символів
            }
          }
        }}
      />

      <p style={{ color: 'rgba(255, 148, 148, 0.2)' }}></p>

      {isError ? (
        <span
          role="alert"
          id={`errorMessage${name}`}
          className="absolute -bottom-1.5 left-0 rounded-md border-error bg-rose-100 p-1 text-[12px] text-error"
        >
          {errorMessage}
        </span>
      ) : null}
    </label>
  );
};
