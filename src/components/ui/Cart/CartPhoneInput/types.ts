import { ChangeEvent } from 'react';

export type CartPhoneInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errors: CartErrors;
  handleValidationPhone: (val: string) => void;
  className?: string;
  showLabel?: boolean;
};
