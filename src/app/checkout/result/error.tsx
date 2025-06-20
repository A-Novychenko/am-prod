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
      title="Ваше замовлення, ймовірно, було успішно відправлене, але під час обробки сталася технічна помилка."
      description="Будь ласка, зв’яжіться з нами, щоб ми могли підтвердити отримання замовлення та надати подальші інструкції."
      subDescription="Вибачте за незручності — ми вже працюємо над вирішенням проблеми."
    />
  );
}
