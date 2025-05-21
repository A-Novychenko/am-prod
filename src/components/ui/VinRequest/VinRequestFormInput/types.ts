import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

export type VinRequestFormInputProps = {
  config: {
    name: string;
    label: string;
    placeholder: string;
    validationOptions: validationOptionsInput;
  };
  register: UseFormRegister<VinRequestFormInputs>;
  trigger: UseFormTrigger<VinRequestFormInputs>;
  errors: FieldErrors<VinRequestFormInputs>;
  inputType?: string;
  inputClassName?: string;
  wrapClassName?: string;
};

export type VinRequestFormInputs = {
  [key: string]: string;
};

type validationOptionsInput = {
  maxLength?: validationOptionsMaxLength;
  minLength?: validationOptionsMinLength;
  pattern?: {
    value: string;
    message: string;
  };
};

type validationOptionsMaxLength = {
  value: number;
  message: string;
};

type validationOptionsMinLength = {
  value: number;
  message: string;
};
