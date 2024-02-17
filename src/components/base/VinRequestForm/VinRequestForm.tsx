'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import staticData from '@/data/common.json';
import { VinRequestFormInput } from '@/components/ui';

type Inputs = {
  vinCode: string;
  brand: string;
  model: string;
  engine: string;
  fuel: string;
  year: string;
};

export const VinRequestForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //   const { submitBtn, vinCode, brand, model, engine, fuel, year } =
  const { submitBtn, vinCode } = staticData.vinRequestForm;
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch('vinCode'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[400px] flex-col gap-4 rounded-[8px] bg-darkBg p-10 text-[20px]"
    >
      <VinRequestFormInput config={vinCode} register={register} />

      {/* // */}

      {/* // */}

      {/* // */}
      <label>
        <input
          {...register('brand', { required: true })}
          className="w-full rounded-md p-2 pr-10 text-[20px] text-primaryText"
        />
      </label>
      <label>
        <input
          {...register('model', { required: true })}
          className="w-full rounded-md p-2 pr-10 text-[20px] text-primaryText"
        />
      </label>
      <label>
        <input
          {...register('engine', { required: true })}
          className="w-full rounded-md p-2 pr-10 text-[20px] text-primaryText"
        />
      </label>
      <label>
        <input
          {...register('fuel', { required: true })}
          className="w-full rounded-md p-2 pr-10 text-[20px] text-primaryText"
        />
      </label>
      <label>
        <input
          {...register('year', { required: true })}
          className="w-full rounded-md p-2 pr-10 text-[20px] text-primaryText"
        />
      </label>

      {errors.vinCode && <span>This field is required</span>}

      <button
        type="submit"
        className="w-full rounded-md bg-accent p-2 pr-10 text-[20px]"
      >
        {submitBtn}
      </button>
    </form>
  );
};
