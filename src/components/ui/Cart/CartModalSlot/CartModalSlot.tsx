'use client';

import { usePathname } from 'next/navigation';

export const CartModalSlot = ({ modal }: { modal: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === '/cart') {
    return <>{modal}</>;
  }

  return null; // не рендерим модалку на других страницах
};
