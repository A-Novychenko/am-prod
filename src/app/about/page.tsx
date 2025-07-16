import { Contacts, Socials } from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';

import commonData from '@/data/common.json';
// import logo from '~/images/logo-about.png';

export default function AboutPage() {
  const { mail } = commonData;

  return (
    <>
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-[#101340] via-[#101320] to-black">
        <div className="container py-16 text-center">
          <h1 className="visually-hidden">Про нас</h1>

          <Link
            href="/"
            className="mx-auto block transition-transform hover:scale-110 focus:scale-110 md:size-[400px]"
          >
            {/* <Image
              src={logo}
              alt="Логотип Avto-Magaz"
              width={1340}
              height={1340}
              className="size-full object-contain"
            /> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-about.png"
              alt="Логотип Avto-Magaz"
              width={1340}
              height={1340}
              className="size-full object-contain"
            />
          </Link>

          <p className="mx-auto max-w-4xl text-xl text-primaryText">
            <Link
              href="/"
              className="font-medium transition-colors hover:text-accent"
            >
              avto-magaz.com.ua
            </Link>{' '}
            — надійний інтернет-магазин автозапчастин, автохімії та аксесуарів.
            <span className="block">
              Працюємо з 2012 року, щоб Ви завжди мали доступ до якісних товарів
              для свого авто.
            </span>
          </p>
        </div>
      </section>

      {/* Історія */}

      <section className="section bg-lightBg">
        <div className="container py-16">
          <div className="text-secondaryText">
            <h2 className="mb-12 text-left text-3xl font-bold">Наша історія</h2>

            <div className="items-center gap-14 xl:flex">
              <div className="mb-4 md:mb-6 xl:mb-0">
                <p className="mb-4 text-lg ">
                  Ми розпочали шлях у 2012 році з невеликого офлайн-магазину
                  автотоварів. Завдяки постійній роботі, чесному сервісу та
                  любові до справи,{' '}
                  <Link
                    href="/"
                    className="font-medium transition-colors hover:text-accent"
                  >
                    avto-magaz.com.ua
                  </Link>{' '}
                  поступово виріс у стабільний та надійний інтернет-магазин,
                  якому довіряють. Сьогодні ми співпрацюємо з перевіреними
                  постачальниками автозапчастин, автохімії та аксесуарів,
                  ретельно добираючи кожну позицію в асортименті. Ми постійно
                  оновлюємо наш каталог, щоб Ви мали доступ до актуальних і
                  якісних товарів для свого авто.
                </p>
                <p className="text-lg">
                  Ми розуміємо потреби наших клієнтів і прагнемо бути
                  максимально відкритими, швидкими та зручними. Саме тому понад
                  90% замовлень відправляються протягом 24 годин. Простий і
                  прозорий процес покупки, швидка доставка та клієнтська
                  підтримка — основа нашої роботи.
                </p>
              </div>

              <div className="shrink-0 overflow-hidden rounded-xl shadow-md xl:h-[400px] xl:w-[600px]">
                {/* <Image
                  src="/images/about-warehouse.png"
                  alt="Фото магазину"
                  width={600}
                  height={400}
                  className="size-full shrink-0 object-cover"
                /> */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-warehouse.png"
                  alt="Фото магазину"
                  width={600}
                  height={400}
                  className="size-full shrink-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Переваги */}

      <section className="section bg-mediumBg">
        <div className="container py-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-secondaryText">
            Наші переваги
          </h2>
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              {
                title: '10+ років досвіду',
                desc: 'Накопичений досвід дозволяє нам надавати експертну підтримку кожному клієнту.',
              },
              {
                title: 'Великий асортимент',
                desc: 'Понад 100 000 позицій: запчастини, автохімія, аксесуари, інструменти.',
              },
              {
                title: 'Доставка по Україні',
                desc: 'Швидка відправка Новою Поштою до будь-якого населеного пункту.',
              },
              {
                title: 'Консультація по VIN',
                desc: 'Підбираємо запчастини точно під ваше авто за VIN-кодом.',
              },
              {
                title: 'Безпечна оплата',
                desc: 'Прямий переказ за реквізитами ФОП по IBAN через надійний банк.',
              },
              {
                title: 'Гарантія якості',
                desc: 'Оригінальні запчастини та перевірені аналоги від перевірених брендів.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border bg-white p-6 shadow transition hover:scale-105"
              >
                <h3 className="mb-2 text-xl font-semibold text-secondaryText">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Більше про нас */}
      <section className="section bg-lightBg">
        <div className="container  py-16 ">
          <h2 className="mb-12 text-left text-3xl font-bold">
            Чому нам довіряють?
          </h2>
          <div className="flex items-center gap-10">
            <div className="flex flex-col gap-6 text-lg">
              <p>
                Ми не просто продаємо товари — ми допомагаємо клієнтам приймати
                обґрунтовані рішення. Завдяки широкій базі даних, досвідченій
                команді та сучасним CRM-системам, ми здатні обробляти замовлення
                будь-якої складності з максимальною точністю.
              </p>
              <p>
                Ми прагнемо, щоб кожне Ваше замовлення залишало лише позитивні
                враження і Ви знову зверталися до нас у майбутньому. Тому ми
                працюємо чесно, пропонуємо конкурентні ціни, регулярно
                впроваджуємо акції, знижки та бонуси постійним покупцям.
              </p>
              <p>
                Наша команда — це фахівці з реальним досвідом у сфері
                автотоварів. Менеджери щодня допомагають клієнтам обрати саме
                те, що потрібно, контролюють процес обробки замовлень та стежать
                за якістю обслуговування. Ми працюємо для того, щоб Ви отримали
                потрібний товар швидко, зручно та без зайвих клопотів.
              </p>
            </div>

            <Image
              src="/images/about-trust.png"
              width={1024}
              height={1024}
              alt=""
              className="hidden size-[400px] shrink-0 object-contain xl:block"
            />
          </div>
        </div>
      </section>

      {/* Контакти */}
      <section className="section bg-mediumBg">
        <div className="container grid gap-12 py-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Контактна інформація
            </h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <strong>Телефони:</strong>{' '}
                <Contacts classNameWrap="text-secondaryText" />
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <Link
                  href={`mailto:${mail}`}
                  className="text-xl transition-colors hover:text-accent focus:text-accent"
                >
                  {mail}
                </Link>
              </li>
              <li>м. Київ</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Ми в мережі
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Слідкуйте за нами в соціальних мережах, щоб першими дізнаватись
              про акції, новинки та поради щодо авто.
            </p>
            <Socials showTitle={false} />
          </div>
        </div>
      </section>

      {/* SEO-блок */}
      <section className="sr-only">
        інтернет-магазин автозапчастин, купити автотовари, запчастини онлайн
        Україна, якісні автозапчастини, доставка по Україні, автоаксесуари,
        магазин авто, автохімія, придбати деталі авто онлайн, підбір запчастин
        по VIN, ФОП реквізити, IBAN оплата, надійний магазин запчастин.
      </section>
    </>
  );
}
