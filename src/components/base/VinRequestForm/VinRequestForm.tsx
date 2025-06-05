/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { useRef, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import {
  FormPhoneInput,
  Recaptcha,
  RecaptchaRef,
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
import useFormPersist from 'react-hook-form-persist';

export const VinRequestForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
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

  useFormPersist('vinForm', { watch, setValue });

  const [status, setStatus] = useState<
    '' | 'success' | 'fail' | 'captchaFail' | 'pending'
  >('');
  const [data, setData] = useState(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const recaptchaRef = useRef<RecaptchaRef>(null);

  const onSubmit: SubmitHandler<VinRequestFormInputs> = async data => {
    if (!captchaToken) {
      setRecaptchaError('Будь ласка, підтвердьте, що Ви не робот.');

      return;
    }

    setRecaptchaError(null);
    setStatus('pending');

    try {
      const result = await addVinRequest({ ...data, captchaToken });

      setData(result.data);

      setStatus('success');
      reset();
      window.sessionStorage.removeItem('vinForm');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      const msg = e.message;

      //Сообщение если и коректировать то здесь и мидлваре "recaptcha" на сервере
      if (msg === 'Captcha verification failed') {
        setStatus('captchaFail');
      } else {
        setStatus('fail');
      }

      setData(null);
    }

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
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

            <div className="flex w-full flex-col items-center justify-center">
              <Recaptcha
                ref={recaptchaRef}
                formId="vin"
                siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                // onChange={setCaptchaToken}
                onChange={token => {
                  setCaptchaToken(token);
                  setRecaptchaError(null);
                }}
                size="compact"
              />

              {recaptchaError && (
                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-red">
                  <span>{recaptchaError}</span>
                </div>
              )}
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

      <VinRequestModalCard type={status} data={data} setStatus={setStatus} />
    </>
  );
};
