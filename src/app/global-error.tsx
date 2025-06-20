'use client';

import { Geologica, Lora, Nunito } from 'next/font/google';

import { Footer } from '@/layout';
import { ErrorSection } from '@/sections';

import {
  Assistance,
  Contacts,
  Logo,
  NavLinks,
  SearchBar,
  WorkSchedule,
} from '@/components/ui';

const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900', '1000'],
  variable: '--font-nunito',
  display: 'swap',
  adjustFontFallback: false,
});

const geologica = Geologica({
  subsets: ['cyrillic'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-geologica',
  display: 'swap',
  adjustFontFallback: false,
});
const lora = Lora({
  subsets: ['cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-lora',
  display: 'swap',
  adjustFontFallback: false,
});

import './globals.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log('error', error);
  console.log('reset', reset);
  return (
    // global-error must include html and body tags
    <html lang="ua">
      <body
        className={`${nunito.variable} ${geologica.variable} ${lora.variable}`}
      >
        <main>
          <div className="flex min-h-screen flex-col">
            <header className=" bg-darkBg text-primaryText">
              <div className="container">
                <div className="flex flex-col py-1 xl:flex-row xl:items-center xl:justify-between">
                  <div className="mt-2 flex justify-between xl:gap-8 smOnly:order-1 smOnly:mb-4 smOnly420:flex-col smOnly420:gap-4">
                    <Logo />

                    <Contacts classNameWrap="mt-4" />
                  </div>

                  <div className="items-center gap-2 pt-8 xl:flex xl:flex-col smOnly:order-3">
                    <SearchBar />

                    <Assistance />
                  </div>

                  <div className="flex items-center justify-between xl:gap-12 smOnly:order-2 smOnly:mb-4">
                    <WorkSchedule />
                  </div>
                </div>

                <NavLinks />
              </div>
            </header>

            <main className="flex grow flex-col">
              <ErrorSection
                title="GLOBAL ERROR"
                subDescription={
                  'Будь ласка, спробуйте ще раз пізніше. Якщо проблема повторюється, зателефонуйте нам у робочий час — ми обов’язково допоможемо.'
                }
                showHomeLink={false}
              />
            </main>

            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
