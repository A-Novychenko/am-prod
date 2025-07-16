import Link from 'next/link';

import staticData from '@/data/common.json';

export default async function ContactsPage() {
  const { contacts, mail, workSchedule } = staticData;

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-8 text-center text-3xl font-bold">Контакти</h1>

        <div className="mb-10 text-lg">
          <p className="mb-4">
            Якщо у Вас виникли запитання щодо замовлення, підбору автозапчастин
            або співпраці — звертайтесь до нас зручним способом.
          </p>

          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Телефони</h2>
            <ul className="list-inside space-y-2">
              <li>
                <Link
                  href={`tel:${contacts.phone.lifecell}`}
                  className="text-blue-600 hover:underline"
                >
                  {contacts.phone.lifecellText}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${contacts.phone.kyivstar}`}
                  className="text-blue-600 hover:underline"
                >
                  {contacts.phone.kyivstarText}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Email</h2>
            <p>
              З питань обслуговування клієнтів або співпраці:
              <br />
              <Link
                href={`mailto:${mail}`}
                className="text-blue-600 hover:underline"
              >
                {mail}
              </Link>
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold">Графік роботи</h2>
            <ul className=" space-y-1">
              <li>{workSchedule.businessDays}</li>
              <li>{workSchedule.weekends}</li>
            </ul>
          </div>

          {workSchedule.address && (
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-semibold">Адреса</h2>
              <p>{workSchedule.address}</p>
            </div>
          )}
        </div>

        <div className="border-t pt-6 text-sm text-gray-600">
          <p>
            Ми завжди на зв’язку та готові допомогти. Дякуємо, що обираєте нас!
          </p>
        </div>
      </div>
    </section>
  );
}
