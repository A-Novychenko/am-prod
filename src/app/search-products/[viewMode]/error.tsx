'use client'; // Error boundaries must be Client Components

import { ErrorSection } from '@/sections';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorSection
      description={
        'Під час обробки Вашого пошукового запиту сталася помилка. Ми вже працюємо над тим, щоб усе виправити.'
      }
    />
  );
}
