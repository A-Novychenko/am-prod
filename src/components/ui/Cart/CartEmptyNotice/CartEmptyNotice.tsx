'use client';

import { useRouter } from 'next/navigation';

import { Btn } from '@/components/ui';

export const CartEmptyNotice: React.FC = () => {
  const router = useRouter();

  return (
    <div className="text-center">
      <p className="mb-6">Немає товарів у кошику</p>

      <Btn
        styleType="primary"
        onClick={() => {
          router.replace('/');
        }}
      >
        Продовжити покупки
      </Btn>
    </div>
  );
};
