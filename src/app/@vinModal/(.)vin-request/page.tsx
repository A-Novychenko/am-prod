'use client';

import { useRouter } from 'next/navigation';

import { VinRequestForm } from '@/components/base';
import { Modal } from '@/components/ui';

export default function Page() {
  const router = useRouter();

  return (
    <Modal show={true} onClose={() => router.push('/')}>
      {/* <Modal show={true} onClose={() => router.back()}> */}
      <VinRequestForm />
    </Modal>
  );
}
