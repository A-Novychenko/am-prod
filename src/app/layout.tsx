import type { Metadata } from 'next';
import { Geologica, Lora, Nunito } from 'next/font/google';

// export const revalidate = 0;

export const dynamic = 'force-dynamic';

import meta from '@/data/meta';

import './globals.css';
import { Header } from '../layout/Header';
import { Footer } from '@/layout/Footer';
import { getMainCategories } from '@/actions/servicesAPI';
import { CartProvider } from '@/context';
import { CartModalSlot } from '@/components/ui';
import { ToastContainer } from 'react-toastify';

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

export const metadata: Metadata = meta;

// export const generateMetadata = async () => {
//   console.log('metaMAIN');
//   return meta;
// };

type Category = {
  id: string;
  name: string;
  parent_id: number;
};

export async function generateStaticParams() {
  const categories = await getMainCategories();

  return (
    categories?.map((category: Category) => {
      return {
        category: category.id.toString(),
      };
    }) || []
  );
}

export default function RootLayout({
  children,
  vinModal,
  cart,
}: Readonly<{
  children: React.ReactNode;
  vinModal: React.ReactNode;
  cart: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
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
