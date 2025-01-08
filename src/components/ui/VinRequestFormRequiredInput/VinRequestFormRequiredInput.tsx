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
    <label className="relative text-primaryText">
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
          'w-full rounded-md border border-transparent p-2 font-geologica text-[16px] text-secondaryText',
          { 'text-error': errorMessage },
          { 'bg-green-200': !errorMessage && !isEmptyValue },
        )}
        placeholder={placeholder}
      />

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
  );
};
