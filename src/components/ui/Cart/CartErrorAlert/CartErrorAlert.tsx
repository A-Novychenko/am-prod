import { Contacts, WorkSchedule } from '@/components/ui';

export const CartErrorAlert: React.FC = () => {
  return (
    <div className="w-full p-2  md:p-8">
      <div className="mb-4 flex items-start justify-between">
        <h2 className="flex items-center text-2xl font-semibold text-red">
          <svg
            className="mr-2 size-6 text-red"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"
            />
          </svg>
          Сталася помилка
        </h2>
      </div>

      <p className="mb-4 text-gray-700">
        На жаль, не вдалося надіслати Ваше замовлення. Це може бути пов’язано з
        технічними труднощами або нестабільним зʼєднанням.
      </p>

      <ul className="mb-6 list-inside list-disc text-gray-700">
        <li>Перевірте підключення до Інтернету</li>
        <li>Спробуйте ще раз через кілька хвилин</li>
        <li>
          Якщо проблема не зникає, будь ласка, зв’яжіться з нашою службою
          підтримки за одним із наступних номерів телефону.
        </li>
      </ul>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <Contacts classNameWrap="text-secondaryText" />
        <WorkSchedule />
      </div>
    </div>
  );
};
