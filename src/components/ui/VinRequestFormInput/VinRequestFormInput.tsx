import { cn } from '@/utils/cn';

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

  const registerOptions = () => {
    return {
      ...validationOptions,

      onChange: () => {
        trigger(name);
      },
      onBlur: () => {
        trigger(name);
      },
    };
  };

  return (
    <label className={cn('relative text-primaryText', wrapClassName)}>
      <p className="mb-1">{label}</p>

      <input
        aria-required={false}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `errorMessage${name}` : undefined}
        {...register(name, { ...registerOptions() })}
        type={inputType}
        className={cn(
          'w-full rounded-md border border-transparent p-2  text-[16px] text-secondaryText',
          { 'text-error': errorMessage },
          inputClassName,
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
