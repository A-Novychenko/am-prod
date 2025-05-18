'use client';

import dynamic from 'next/dynamic';

import { useRouter } from 'next/navigation';

import { Modal } from '@/components/ui';

const Cart = dynamic(() => import('@/components/ui/Cart/Cart'), {
  ssr: false,
});

export default function Page() {
  const router = useRouter();

  return (
    // <Modal show={true} onClose={() => router.push('/')}>
    <Modal show={true} onClose={() => router.back()}>
      <Cart />
    </Modal>
  );
}
