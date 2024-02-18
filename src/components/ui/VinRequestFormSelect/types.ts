import { UseFormRegister } from 'react-hook-form';

export type VinRequestFormSelectProps = {
  config: {
    name: string;
    label: string;
    options: SelectOptions;
  };
  register: UseFormRegister<VinRequestFormInputs>;

  inputClassName?: string;
};

export type VinRequestFormInputs = {
  [key: string]: string;
};

type SelectOptions = { value: string; text: string }[];
