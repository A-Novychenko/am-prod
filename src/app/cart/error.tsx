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
      subDescription="Будь ласка, спробуйте оновити сторінку або поверніться пізніше. Якщо проблема не зникає, спробуйте очистити збережені дані сайту — іноді це допомагає. Це можна зробити, відкривши сайт у приватному (інкогніто) режимі або очистивши дані перегляду (локальне сховище) у налаштуваннях браузера.
Якщо нічого не допомагає — напишіть нам, і ми обов’язково Вам допоможемо."
    />
  );
}
