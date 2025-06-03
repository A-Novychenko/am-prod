'use client';

import { useRouter } from 'next/navigation';

import { cn } from '@/utils';

import IconVin from '~/icons/vin-car.svg';

export const VinRequestMainCard = () => {
  const router = useRouter();

  return (
    <div className="mb-4 flex flex-col items-center rounded-2xl p-10  text-center shadow-customLight xl:mb-0 xl:mr-8">
      <h2 className="mb-6 text-2xl font-bold">Не знайшли потрібну деталь?</h2>

      <IconVin className="block h-52 smOnly:h-full" />

      <p className="mb-8">
        Залиште VIN-код Вашого авто — ми підберемо запчастини швидко та точно!
        Просто заповніть форму, наш менеджер зв’яжеться з Вами.
      </p>

      <button
        type="button"
        onClick={() => router.push('/vin-request')}
        className={cn(
          'mx-auto cursor-pointer rounded-[8px] bg-accent p-3 text-center font-medium ',
          'transition-colors hover:bg-darkBg hover:text-primaryText disabled:bg-slate-300 disabled:text-slate-500',
        )}
      >
        Залишити запит по VIN
      </button>
    </div>
  );
};
