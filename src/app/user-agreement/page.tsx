import Link from 'next/link';

import staticData from '@/data/common.json';

export default async function UserAgreementPage() {
  const { mail, workSchedule, contacts } = staticData;

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Угода користувача
        </h1>

        <p className="mb-6 text-lg">
          Ця угода користувача регулює правила використання сайту
          <span className="font-semibold"> avto-magaz.com.ua</span> та послуг,
          що надаються через нього. Використовуючи сайт, Ви погоджуєтеся з
          умовами цієї угоди.
        </p>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">1. Загальні положення</h2>
          <p>
            Сайт надає користувачам можливість перегляду, підбору та замовлення
            автозапчастин. Всі права на контент належать власнику сайту.
            Заборонено копіювати або розповсюджувати матеріали без письмової
            згоди адміністрації.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Обов&#39;язки користувача
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Надавати достовірну інформацію під час оформлення замовлень.
            </li>
            <li>Не здійснювати дії, що можуть зашкодити роботі сайту.</li>
            <li>
              Не використовувати сайт для розповсюдження шкідливого програмного
              забезпечення.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">3. Відповідальність</h2>
          <p>
            Адміністрація сайту не несе відповідальності за тимчасову
            недоступність ресурсу з технічних причин або через обставини
            непереборної сили.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">4. Зміни в Угоді</h2>
          <p>
            Ми маємо право змінювати умови цієї угоди. Актуальна версія завжди
            доступна на сайті.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            5. Контактна інформація
          </h2>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Телефон:{' '}
              <Link
                href={`tel:${contacts.phone.lifecell}`}
                className="text-blue-600 hover:underline"
              >
                {contacts.phone.lifecellText}
              </Link>
            </li>
            <li>
              Email:{' '}
              <Link
                href="mailto:support@avto-magaz.com.ua"
                className="text-blue-600 hover:underline"
              >
                {mail}
              </Link>
            </li>
            <li>Графік роботи: {workSchedule.businessDays}</li>
          </ul>
        </div>

        <div className="mb-16 border-t pt-6 text-sm text-gray-600">
          <p>
            Ми дотримуємося принципів чесності, прозорості та захисту прав
            користувачів.
          </p>
        </div>

        <h2 className="mb-6 text-center text-3xl font-bold">
          Політика конфіденційності
        </h2>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">1. Загальні положення</h2>
          <p>
            Ця політика конфіденційності встановлює порядок обробки та захисту
            персональних даних користувачів сайту avto-magaz.com.ua відповідно
            до Закону України «Про захист персональних даних».
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Які дані ми збираємо
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Ім’я, прізвище, номер телефону, email, адреса доставки;</li>
            <li>Інформацію про замовлення та комунікацію з магазином;</li>
            <li>
              IP-адресу, інформацію про пристрій, cookies (для аналітики і
              зручності).
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            3. Як ми використовуємо дані
          </h2>
          <p>Дані використовуються для:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>оформлення та виконання замовлень;</li>
            <li>комунікації з користувачами;</li>
            <li>поліпшення сервісу та персоналізації контенту.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            4. Захист персональних даних
          </h2>
          <p>
            Ми вживаємо необхідних технічних та організаційних заходів для
            захисту Ваших даних від несанкціонованого доступу, зміни,
            розголошення чи знищення.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            5. Передача третім особам
          </h2>
          <p>
            Дані можуть бути передані третім особам лише у випадках,
            передбачених законодавством України або для забезпечення виконання
            замовлення (наприклад, службі доставки).
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">6. Права користувача</h2>
          <p>
            Ви маєте право на доступ до своїх персональних даних, їх
            виправлення, оновлення, обмеження обробки або видалення, звернувшись
            до нашої служби підтримки.
          </p>
        </div>

        <div className="border-t pt-6 text-sm text-gray-600">
          <p>
            Використовуючи наш сайт, Ви погоджуєтеся з умовами цієї Політики
            конфіденційності. У разі змін, оновлена версія буде опублікована на
            цій сторінці.
          </p>
        </div>
      </div>
    </section>
  );
}
