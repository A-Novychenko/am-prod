import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils';

export const InProgressSection = () => {
  return (
    <section className={cn('section grow')}>
      <div className="container">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-md">
            <h1 className="mb-4 text-5xl font-bold text-yellow-500">🚧</h1>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Сторінка в процесі розробки
            </h2>
            <p className="mb-6 text-gray-600">
              Ми вже працюємо над цією сторінкою. Зовсім скоро тут з’явиться
              корисна інформація.
            </p>
            <Link
              href="/"
              className="mx-auto block max-w-fit rounded bg-darkBg p-2 text-center font-medium text-primaryText transition-colors hover:bg-accent hover:text-secondaryText focus:bg-accent focus:text-secondaryText"
            >
              Повернутись на головну
            </Link>
          </div>
          <div className="mt-10 md:h-[300px] xl:h-[500px]">
            <Image
              src="/images/in-progress.png"
              alt="Сторінка в розробці"
              className="mx-auto size-full object-contain"
              width={1536}
              height={1024}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
