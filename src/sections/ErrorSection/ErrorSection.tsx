// import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils';

export const ErrorSection: React.FC<{
  children?: React.ReactNode;
  title?: string;
  description?: string;
  subDescription?: string;
  showHomeLink?: boolean;
}> = ({
  children,
  title = 'Щось пішло не так! 🤔',
  description = '  Під час обробки сторінки сталася помилка. Ми вже працюємо над тим, щоб усе виправити.',
  subDescription = 'Будь ласка, спробуйте ще раз пізніше або поверніться на головну сторінку. Якщо проблема повторюється, напишіть нам — ми обов’язково допоможемо.',
  showHomeLink = true,
}) => {
  return (
    <section className={cn('section grow')}>
      <div className="container">
        <div className="flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-md">
            <h1 className="mb-4 text-5xl font-bold text-red">
              Виникла помилка
            </h1>
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              {title}
            </h2>
            <p className="mb-6 text-gray-600">{description}</p>
            <p className="mb-6 text-gray-600">{subDescription}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {children}

              {showHomeLink && (
                <Link
                  href="/"
                  className="block max-w-fit rounded bg-darkBg  p-2 text-center font-medium text-primaryText  transition-colors hover:bg-accent hover:text-secondaryText focus:bg-accent focus:text-secondaryText"
                >
                  Повернутись на головну
                </Link>
              )}
            </div>
          </div>

          <div className="mt-10 md:h-[40vh]">
            {/* <Image
              src="/images/image-404.png"
              alt="Машина не знайдена"
              className="mx-auto size-full object-cover"
              width={1536}
              height={1024}
            /> */}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/image-404.png"
              alt="Машина не знайдена"
              className="mx-auto size-full object-cover"
              width={1536}
              height={1024}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
