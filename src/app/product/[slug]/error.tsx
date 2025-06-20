'use client'; // Error boundaries must be Client Components

import { BackBtn } from '@/components/ui';
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
        'Не вдалося завантажити цей товар. Ми вже працюємо над тим, щоб усе виправити.'
      }
      subDescription={
        'Будь ласка, спробуйте ще раз пізніше або поверніться на головну сторінку чи до категорій. Якщо проблема повторюється — напишіть нам, і ми обов’язково допоможемо. Також Ви можете переглянути інші товари — можливо, знайдете щось цікаве.'
      }
    >
      <BackBtn
        className="focus::bg-accent bg-darkBg text-lightBg hover:bg-accent"
        text="Повернутись назад"
        showIcon={false}
      />
    </ErrorSection>
  );
}
