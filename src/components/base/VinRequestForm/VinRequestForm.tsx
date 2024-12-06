'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import {
  FormPhoneInput,
  VinRequestFormInput,
  VinRequestFormRequiredInput,
  VinRequestFormSelect,
} from '@/components/ui';

import staticData from '@/data/common.json';

import { VinRequestFormInputs } from './types';

export const VinRequestForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    formState: { errors },
  } = useForm<VinRequestFormInputs>();

  const { submitBtn, vinCode, brand, model, engine, fuel, year, phone } =
    staticData.vinRequestForm;
  const onSubmit: SubmitHandler<VinRequestFormInputs> = data =>
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 rounded-[16px] bg-darkBg p-3 text-[16px] md:w-[476px] md:p-8 smOnly:mb-10"
    >
      <VinRequestFormRequiredInput
        config={vinCode}
        register={register}
        errors={errors}
        trigger={trigger}
        watch={watch}
      />

      <VinRequestFormInput
        config={brand}
        register={register}
        errors={errors}
        trigger={trigger}
      />

      <VinRequestFormInput
        config={model}
        register={register}
        errors={errors}
        trigger={trigger}
      />

      <div className="flex flex-col gap-1 md:flex-row">
        <VinRequestFormInput
          config={engine}
          register={register}
          errors={errors}
          trigger={trigger}
          inputClassName="md:w-[120px]"
        />

        <VinRequestFormSelect
          config={fuel}
          register={register}
          inputClassName="md:w-[140px] "
        />

        <VinRequestFormInput
          config={year}
          register={register}
          errors={errors}
          trigger={trigger}
          inputType="number"
        />
      </div>

      <FormPhoneInput config={phone} control={control} errors={errors} />

      <button
        type="submit"
        className="w-full rounded-md bg-accent p-3 pr-10 text-[20px] font-medium"
      >
        {submitBtn}
      </button>
    </form>
  );
};
