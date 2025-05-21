import {
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';

export type VinRequestFormInputProps = {
  config: {
    name: string;
    label: string;
    placeholder: string;
    validationOptions: validationOptionsInput;
  };
  register: UseFormRegister<VinRequestFormInputs>;
  errors: FieldErrors<VinRequestFormInputs>;
  trigger: UseFormTrigger<VinRequestFormInputs>;
  watch: UseFormWatch<VinRequestFormInputs>;
  inputType?: string;
};

export type VinRequestFormInputs = {
  [key: string]: string;
};

type validationOptionsInput = {
  required?: validationOptionsRequired;
  pattern?: validationOptionsPattern;
  maxLength?: validationOptionsMaxLength;
  minLength?: validationOptionsMinLength;
};

type validationOptionsRequired = {
  value: boolean;
  message: string;
};

type validationOptionsPattern = {
  value: string;
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
