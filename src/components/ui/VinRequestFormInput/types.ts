import { UseFormRegister } from 'react-hook-form';

export type VinRequestFormInputProps = {
  config: {
    label: string;
    placeholder: string;
    required: boolean;
  };
  register: UseFormRegister<ContactFormInputs>;
};

type ContactFormInputs = {
  vinCode: string;
  brand: string;
  model: string;
  engine: string;
  fuel: string;
  year: string;
};
