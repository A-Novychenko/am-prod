import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils';

export const NotFoundSection = () => {
  return (
    <section className={cn('section grow')}>
      <div className="container">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-md">
            <h1 className="mb-4 text-5xl font-bold text-red">404</h1>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Сторінку не знайдено
            </h2>
            <p className="mb-6 text-gray-600">
              Можливо, Ви ввели неправильну адресу, або сторінка була видалена.
            </p>
            <Link
              href="/"
              className="mx-auto block max-w-fit rounded bg-darkBg  p-2 text-center font-medium text-primaryText  transition-colors hover:bg-accent hover:text-secondaryText focus:bg-accent focus:text-secondaryText"
            >
              Повернутись на головну
            </Link>
          </div>
          <div className="mt-10 md:h-[300px] xl:h-[500px]">
            <Image
              src="/images/image-404.png"
              alt="Машина не знайдена"
              className="mx-auto size-full object-cover"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
