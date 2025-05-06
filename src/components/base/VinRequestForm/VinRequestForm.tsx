'use client';

// import { useState } from 'react';

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
    vinCode,
    brand,
    model,
    engine,
    fuel,
    year,
    phone,
    message,
  } = staticData.vinRequestForm;

  const onSubmit: SubmitHandler<VinRequestFormInputs> = data => {
    console.log(data);

    reset();
  };

  const hasErrors = Object.keys(errors).length > 0;
  console.log('Has Validation Errors:', hasErrors);

  return (
    <>
      <h2 className="mb-10 text-center text-2xl font-bold">
        Пошук запчастин за VIN-кодом
      </h2>
      <p className="mb-6">
        Введіть VIN-код Вашого автомобіля, щоб швидко та точно підібрати сумісні
        запчастини. Це найнадійніший спосіб врахувати рік випуску, комплектацію
        та всі технічні особливості саме Вашої моделі. VIN — це унікальний
        17-символьний номер, який зазвичай можна знайти в техпаспорті, під
        лобовим склом або на стійці дверей. Його використання допомагає уникнути
        помилок при замовленні та заощадити час.
      </p>

      <p className="mb-6">
        Просто заповніть форму нижче, додайте VIN-код і перелік потрібних
        запчастин — ми підберемо відповідні деталі та оперативно з Вами
        зв’яжемося. Якщо Ви не маєте можливості вказати VIN, все одно надішліть
        запит — наша команда допоможе знайти необхідне.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 rounded-[16px] bg-darkBg p-3 text-[16px]  md:px-8 md:py-6 smOnly:mb-10 mdOnly:mb-10 mdOnly:w-full"
      >
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

        <div className="flex flex-col gap-2">
          <VinRequestFormTextarea
            config={message}
            register={register}
            errors={errors}
            trigger={trigger}
          />
        </div>

        <button
          type="submit"
          className={cn(
            'w-full rounded-md bg-accent p-3 pr-10 text-[20px] font-medium',
            'transition-colors hover:bg-darkBlueBg hover:text-primaryText focus:bg-darkBlueBg focus:text-primaryText',
          )}
        >
          {submitBtn}
        </button>
      </form>
    </>
  );
};
