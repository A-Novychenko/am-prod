import { FieldValues, FieldErrors, Control } from 'react-hook-form';

export type FormPhoneInputProps = {
  config: {
    name: string;
    label: string;
    placeholder: string;
    validationOptions: validationOptionsInput;
  };

  errors: FieldErrors<VinRequestFormInputs>;
  control: Control<FieldValues>;
  inputType?: string;
  inputClassName?: string;
  wrapClassName?: string;
};

export type VinRequestFormInputs = {
  [key: string]: string;
};

type validationOptionsInput = {
  required?: validationOptionsRequired;
  maxLength?: validationOptionsMaxLength;
  minLength?: validationOptionsMinLength;
};

type validationOptionsRequired = {
  value: boolean;
  message: string;
};

type validationOptionsMaxLength = {
  value: number;
  message: string;
};

type validationOptionsMinLength = {
  value: number;
  message: string;
};
