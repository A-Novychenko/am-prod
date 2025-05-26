'use client';

import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import {
  FormPhoneInput,
  VinRequestFormInput,
  VinRequestFormRequiredInput,
  VinRequestFormSelect,
  VinRequestFormTextarea,
  VinRequestModalCard,
} from '@/components/ui';

import { addVinRequest } from '@/actions/servicesAPI';
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
    name,
    vinCode,
    brand,
    model,
    engine,
    fuel,
    year,
    phone,
    message,
  } = staticData.vinRequestForm;

  const [status, setStatus] = useState<string>('');
  const [data, setData] = useState(null);

  const onSubmit: SubmitHandler<VinRequestFormInputs> = async data => {
    setStatus('pending');

    try {
      const result = await addVinRequest(data);

      setData(result.data);

      setStatus('success');
      reset();
    } catch (error) {
      setData(null);
      setStatus('fail');
    }
  };

  return (
    <>
      {(status === '' || status === 'pending') && (
        <>
          <h2 className="mb-6 text-center text-2xl font-bold">
            Підбір запчастин по VIN-коду
          </h2>
          <p className="mx-auto mb-4 max-w-[580px] text-center">
            Вкажіть VIN-код Вашого автомобіля — це дозволить точно і коректно
            підібрати запчастини. Якщо VIN-код наразі недоступний, заповніть,
            будь ласка, форму — наші фахівці зв’яжуться з Вами для уточнення
            необхідної інформації та підбору відповідних запчастин.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex max-w-[580px] flex-col gap-2  p-3 text-[16px] md:px-8 md:py-6 smOnly:mb-10 mdOnly:mb-10 mdOnly:w-full"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <VinRequestFormInput
                  config={name}
                  register={register}
                  errors={errors}
                  trigger={trigger}
                  wrapClassName="w-full"
                />

                <FormPhoneInput
                  config={phone}
                  control={control}
                  errors={errors}
                  trigger={trigger}
                />
              </div>

              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div className="flex md:w-[400px]">
                  <VinRequestFormRequiredInput
                    config={vinCode}
                    register={register}
                    errors={errors}
                    trigger={trigger}
                    watch={watch}
                  />
                </div>
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
              </div>

              <div className="flex flex-col justify-between gap-4 md:flex-row">
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
              {status === 'pending' ? 'Відправка...' : submitBtn}
            </button>
          </form>
        </>
      )}

      {status === 'success' && (
        <VinRequestModalCard type="success" data={data} />
      )}

      {status === 'fail' && <VinRequestModalCard type="fail" />}
    </>
  );
};
