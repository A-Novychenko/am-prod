import type { Metadata } from 'next';
import { Geologica, Lora, Nunito } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';

import { Footer, Header } from '@/layout';
import { CartModalSlot, ScrollToTopButton } from '@/components/ui';

import { getMainCategories } from '@/actions/servicesAPI';
import { CartProvider } from '@/context';
import { generateStaticMetadata } from '@/utils';

import './globals.css';

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

export const metadata: Metadata = generateStaticMetadata('home');

type Category = {
  id: string;
  name: string;
  parent_id: number;
};

export async function generateStaticParams() {
  try {
    const categories = await getMainCategories();

    return (
      categories?.map((category: Category) => ({
        category: category.id.toString(),
      })) || []
    );
  } catch (error) {
    console.error('generateStaticParams error:', error);
    return [];
  }
}

export default async function RootLayout({
  cart,
  vinModal,
  children,
}: {
  children: React.ReactNode;
  vinModal: React.ReactNode;
  cart: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-PKGTCK5F" />
      <GoogleTagManager gtmId="G-JH1PJCRTT3" />

      <body
        className={`${nunito.variable} ${geologica.variable} ${lora.variable}`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex grow flex-col">
              {children}

              {vinModal}
              <CartModalSlot modal={cart} />
            </main>

            <Footer />

            <ScrollToTopButton />
          </div>
        </CartProvider>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
