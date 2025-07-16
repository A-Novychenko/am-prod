// import Image from 'next/image';
import Link from 'next/link';

import commonData from '@/data/common.json';

export default function DeliveryPage() {
  const { contacts, mail } = commonData;

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-10 text-center text-4xl font-bold">Доставка</h1>

        <p className="mb-6">
          Ми прагнемо, щоб кожне замовлення доставлялось швидко, зручно та
          безпечно. Інтернет-магазин{' '}
          <Link
            href="/"
            className="font-medium transition-colors hover:text-accent"
          >
            avto-magaz.com.ua
          </Link>{' '}
          співпрацює з провідними перевізниками, забезпечуючи доставку
          автотоварів по всій Україні.
        </p>

        <h2 className="mb-4 text-2xl font-semibold">Умови доставки</h2>
        <ul className="mb-8 list-inside list-disc space-y-2">
          <li>
            Відправка замовлень здійснюється щодня, крім вихідних та святкових
            днів.
          </li>
          <li>
            Після підтвердження замовлення товар пакується та передається до
            відправлення протягом 24 годин.
          </li>
          <li>
            Доставка по Україні займає від 1 до 3 днів залежно від регіону.
          </li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">Спосіб доставки</h2>
        <p className="mb-6">
          Доставка здійснюється логістичними компаніями, що забезпечує високу
          швидкість перевезення та зручні умови отримання товару у відділеннях
          або через кур’єра.
        </p>

        <div className="mb-10">
          {/* <Image
            src="/images/delivery-1.png"
            alt="Служба доставки"
            width={800}
            height={450}
            className="mx-auto rounded-xl shadow-md"
          /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/delivery-1.png"
            alt="Служба доставки"
            width={800}
            height={450}
            className="mx-auto rounded-xl shadow-md"
          />
        </div>

        <h2 className="mb-4 text-2xl font-semibold">Вартість доставки</h2>
        <ul className="mb-8 list-inside list-disc space-y-2">
          <li>
            Вартість доставки залежить від габаритів, ваги товару та тарифів
            перевізника.
          </li>
          <li>
            Оплата доставки здійснюється клієнтом при отриманні замовлення.
          </li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">
          Інформація про відправку
        </h2>
        <p className="mb-6">
          Після відправлення замовлення Ви отримаєте повідомлення з номером
          експрес-накладної для відстеження доставки. У разі потреби наші
          менеджери завжди готові надати додаткову інформацію про статус Вашого
          замовлення.
        </p>

        <div className="mb-10">
          {/* <Image
            src="/images/delivery-2.png"
            alt="Упаковка замовлення на складі"
            width={800}
            height={450}
            className="mx-auto rounded-xl shadow-md"
          /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/delivery-2.png"
            alt="Упаковка замовлення на складі"
            width={800}
            height={450}
            className="mx-auto rounded-xl shadow-md"
          />
        </div>

        <h2 className="mb-4 text-2xl font-semibold">Поради для покупців</h2>
        <ul className="mb-8 list-inside list-disc space-y-2">
          <li>Перевіряйте цілісність упаковки та товару при отриманні.</li>
          <li>Не забувайте зберігати квитанцію або номер накладної.</li>
          <li>
            У разі пошкодження товару при транспортуванні одразу звертайтесь до
            служби підтримки перевізника.
          </li>
        </ul>

        <h2 className="mb-4 text-2xl font-semibold">Зв&#39;язок з нами</h2>
        <p className="mb-6">
          Якщо у Вас виникли запитання щодо доставки, звертайтесь за телефонами:
        </p>
        <ul className="mb-6 font-bold text-secondaryText">
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
        <p className="text-sm text-gray-600">
          або пишіть на email:{' '}
          <Link
            href={`mailto:${mail}`}
            className="font-bold text-secondaryText transition-colors hover:text-accent focus:text-accent"
          >
            {mail}
          </Link>
          — ми завжди готові допомогти.
        </p>

        <div className="sr-only">
          Доставка автотоварів, інтернет-магазин запчастин, швидка доставка,
          доставка Новою Поштою, відправка товарів, транспортна компанія, умови
          доставки, доставка автозапчастин по Україні, де замовити автотовари з
          доставкою, інтернет-магазин автохімії, доставка по Україні, доставка з
          оплатою, купити з доставкою автозапчастини.
        </div>
      </div>
    </section>
  );
}
