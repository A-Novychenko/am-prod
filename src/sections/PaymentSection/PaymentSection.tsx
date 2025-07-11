import Link from 'next/link';

import commonData from '@/data/common.json';

export const PaymentSection = () => {
  const { contacts, mail } = commonData;

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-10 text-center text-4xl font-bold">Оплата</h1>

        <p className="mb-6">
          Дякуємо за Ваш вибір! Оплата замовлень в інтернет-магазині{' '}
          <Link
            href="https://avto-magaz.com.ua"
            className="font-medium transition-colors hover:text-accent focus:text-accent"
          >
            avto-magaz.com.ua
          </Link>{' '}
          здійснюється зручно та безпечно. Ми дотримуємось чинного законодавства
          України й гарантуємо прозорість кожної транзакції.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Спосіб оплати</h2>
        <p className="mb-6">
          Оплата здійснюється по реквізитам на розрахунковий рахунок IBAN (ФОП
          ІІІ-група без ПДВ).
        </p>

        <h2 className="mb-4 text-2xl font-semibold">
          Порядок обробки замовлення
        </h2>
        <ul className="mb-8 list-inside list-disc space-y-2">
          <li>
            Після оформлення замовлення Вам буде відправлено рахунок на оплату
            на Ваш email.
          </li>
          <li>
            Ви здійснюєте оплату у своєму банківському додатку або у відділенні
            банку.
          </li>
          <li>
            Після зарахування коштів, здійснюється комплектування та
            відправлення товару.
          </li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">Безпека та довіра</h2>
        <p className="mb-6">
          Ми цінуємо довіру наших клієнтів. Всі платежі приймаються офіційно,
          згідно з чинним законодавством. Ваша оплата — це гарантія належного
          обслуговування, якісного товару та підтвердження Вашого замовлення.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Корисна інформація</h2>
        <ul className="mb-8 list-inside list-disc space-y-2">
          <li>Товари, що замовлені резервуються на 2 доби.</li>
          <li>
            Якщо оплата не здійснена протягом цього терміну, замовлення буде
            автоматично скасоване.
          </li>
          <li>
            Після оплати зберігайте квитанцію до моменту отримання товару.
          </li>
          <li>
            Оплата замовлення здійснюється виключно за безготівковим розрахунком
            через банківський переказ на рахунок IBAN. Це безпечний і зручний
            спосіб оплати товар онлайн. Післяплата відсутня. Усі реквізити для
            оплати надсилаються клієнту після підтвердження
            замовлення.Надійність, прозорість — наші пріоритети. Купуйте
            впевнено!
          </li>
        </ul>

        <div className="border-t pt-6 text-sm text-gray-600">
          Якщо у Вас виникли запитання щодо оплати, звертайтесь за телефонами:
          <ul className="font-bold text-secondaryText">
            <li>
              <Link
                href={contacts.phone.kyivstar}
                className="transition-colors hover:text-accent focus:text-accent"
              >
                {contacts.phone.kyivstarText}
              </Link>
            </li>
            <li>
              <Link
                href={contacts.phone.lifecell}
                className="transition-colors hover:text-accent focus:text-accent"
              >
                {contacts.phone.lifecellText}
              </Link>
            </li>
          </ul>
          або пишіть на email{' '}
          <Link
            href={contacts.phone.kyivstar}
            className="font-bold text-secondaryText transition-colors hover:text-accent focus:text-accent"
          >
            {mail}
          </Link>
          — ми завжди на зв&#39;язку.
        </div>

        <div>
          <p className="sr-only">
            Оплата замовлення в нашому інтернет-магазині здійснюється виключно
            за безготівковим розрахунком через банківський переказ на рахунок
            IBAN ФОП. Це безпечний і зручний спосіб оплатити товар онлайн,
            відповідно до чинного законодавства України. Ми не приймаємо оплату
            через післяплату, готівку або сторонні сервіси. Усі реквізити для
            оплати надсилаються клієнту після підтвердження замовлення.
            Надійність, прозорість і захист даних — наші пріоритети. Шукаєте, як
            оплатити інтернет-покупку в Україні або зробити передоплату за товар
            з доставкою? У нас — тільки офіційна оплата по реквізитам. Купуйте
            впевнено!
          </p>

          <div className="sr-only">
            Оплата замовлення, інтернет-магазин, банківський переказ, рахунок
            IBAN, ФОП реквізити, передоплата за товар, купити онлайн,
            безготівкова оплата, безпечна онлайн-оплата, інтернет-торгівля в
            Україні, як оплатити товар в інтернеті, реквізити для оплати, оплата
            товару по безналу, онлайн-замовлення з оплатою, магазин з
            передоплатою, як оплатити інтернет-покупку, доставка з оплатою IBAN,
            офіційна оплата в Україні, покупки онлайн Україна.
          </div>
        </div>
      </div>
    </section>
  );
};
