'use client';

import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import {
  FormPhoneInput,
  VinRequestFormInput,
  VinRequestFormRequiredInput,
  VinRequestFormSelect,
  VinRequestFormTextarea,
} from '@/components/ui';

import { cn } from '@/utils';

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
    reset,
  } = useForm<VinRequestFormInputs>();

  const {
    submitBtn,
    reverseBtn,
    reverseBtnBack,
    vinCode,
    brand,
    model,
    engine,
    fuel,
    year,
    phone,
    message,
  } = staticData.vinRequestForm;

  const [side, setSide] = useState<boolean>(true);

  const onSubmit: SubmitHandler<VinRequestFormInputs> = data => {
    console.log(data);

    reset();
  };

  const handleReverse = async () => {
    // setSide(!side);
    if (!side) {
      setSide(!side);
    }

    const isVinCodeValid = await trigger('vinCode');
    const isPhoneValid = await trigger('phone');

    if (isVinCodeValid && isPhoneValid) {
      setSide(!side);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;
  console.log('Has Validation Errors:', hasErrors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 rounded-[16px] bg-darkBg p-3 text-[16px] md:w-[476px] md:px-8 md:py-6 smOnly:mb-10 mdOnly:mb-10 mdOnly:w-full"
    >
      {side ? (
        <div className="flex flex-col gap-2">
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

          <FormPhoneInput
            config={phone}
            control={control}
            errors={errors}
            trigger={trigger}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <VinRequestFormTextarea
            config={message}
            register={register}
            errors={errors}
            trigger={trigger}
          />
        </div>
      )}

      {side ? (
        <button
          type="button"
          onClick={handleReverse}
          className={cn(
            'w-full rounded-md bg-accent p-3 pr-10 text-[20px] font-medium',
            'transition-colors hover:bg-darkBlueBg hover:text-primaryText focus:bg-darkBlueBg focus:text-primaryText',
            { 'bg-error': hasErrors },
          )}
        >
          {reverseBtn}
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={handleReverse}
            className={cn(
              'w-full rounded-md bg-mediumBg p-3 pr-10 text-[20px] font-medium ',
              'transition-colors hover:bg-slate-500 hover:text-primaryText focus:bg-slate-500 focus:text-primaryText',
            )}
          >
            {reverseBtnBack}
          </button>

          <button
            type="submit"
            className={cn(
              'w-full rounded-md bg-accent p-3 pr-10 text-[20px] font-medium',
              'transition-colors hover:bg-darkBlueBg hover:text-primaryText focus:bg-darkBlueBg focus:text-primaryText',
            )}
          >
            {submitBtn}
          </button>
        </>
      )}
    </form>
  );
};
