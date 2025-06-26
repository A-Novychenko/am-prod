import { cn } from '@/utils';

import { VinRequestFormInputProps } from './types';

export const VinRequestFormTextarea: React.FC<VinRequestFormInputProps> = ({
  config: { name, label, placeholder, validationOptions },
  register,
  errors,
  trigger,

  inputClassName,
  wrapClassName,
}) => {
  const isError = errors?.[name];

  const errorMessage = errors?.[name]?.message;

  return (
    <label className={cn('relative text-secondaryText', wrapClassName)}>
      <span className="mb-1 block">{label}</span>

      <textarea
        className={cn(
          'h-[164px] w-full resize-none rounded-md border border-secondaryText/50 p-2  text-[16px] text-secondaryText',
          { 'text-error': errorMessage },
          inputClassName,
        )}
        placeholder={placeholder}
        {...register(name, {
          ...validationOptions,
        })}
        onBlur={() => trigger(name)}
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
