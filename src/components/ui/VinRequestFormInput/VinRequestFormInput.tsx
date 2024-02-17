import { VinRequestFormInputProps } from './types';

export const VinRequestFormInput: React.FC<VinRequestFormInputProps> = ({
  config: { required, label, placeholder },
  register,
}) => {
  return (
    <label className=" text-primaryText">
      <p className="mb-1">
        {required ? <span className=" mr-1 text-red">*</span> : ''}
        {label}
      </p>
      <input
        {...register('vinCode', { required: required })}
        className="w-full rounded-md p-2 pr-10 text-[20px] text-primaryText"
        placeholder={placeholder}
      />
    </label>
  );
};
