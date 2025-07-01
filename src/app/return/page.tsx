import Link from 'next/link';

import staticData from '@/data/common.json';

export default async function ReturnPage() {
  const { mail, workSchedule, contacts } = staticData;

  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Політика повернення товарів
        </h1>

        <p className="mb-6 text-lg">
          Ця політика повернення регламентує порядок повернення та обміну
          товарів, придбаних в інтернет-магазині
          <span className="font-semibold"> avto-magaz.com.ua</span>, та створена
          відповідно до Закону України «Про захист прав споживачів».
        </p>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            1. Товари, що підлягають поверненню
          </h2>
          <p className="mb-2">
            Покупець має право повернути товар належної якості протягом 14
            календарних днів з моменту отримання, за умови:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>товар не був у використанні;</li>
            <li>
              збережено його товарний вигляд, споживчі властивості, пломби,
              ярлики;
            </li>
            <li>
              є документ, що підтверджує факт купівлі (фіскальний чек, накладна,
              квитанція).
            </li>
          </ul>
          <p className="mt-2">
            Поверненню не підлягають товари, визначені у{' '}
            <span className="font-medium">
              Переліку товарів належної якості, що не підлягають поверненню
            </span>
            , затвердженому постановою КМУ №172 від 19.03.1994 р.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            2. Процедура повернення товару
          </h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>
              Зв’яжіться з нами за телефонами або email, вказаними на сайті, та
              повідомте про намір повернення.
            </li>
            <li>Заповніть заяву на повернення (ми надамо шаблон).</li>
            <li>
              Надішліть товар Новою поштою на адресу складу, узгоджену з
              менеджером.
            </li>
          </ol>
          <p className="mt-2">
            Товар має бути надісланий у надійній упаковці з усіма документами та
            заявою всередині посилки.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            3. Витрати на пересилання
          </h2>
          <p>
            У випадку, якщо повернення здійснюється з причини помилки
            інтернет-магазину (невідповідність, дефект), ми компенсуємо витрати
            на доставку. В інших випадках — пересилання здійснюється за рахунок
            покупця.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">4. Повернення коштів</h2>
          <p className="mb-2">
            Після отримання та перевірки товару, кошти будуть повернуті протягом{' '}
            <span className="font-semibold">7 робочих днів</span> з моменту
            підтвердження відповідності умовам повернення.
          </p>
          <p>
            Грошові кошти повертаються тим самим способом, яким було здійснено
            оплату, або іншим способом за згодою сторін.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">5. Обмін товару</h2>
          <p className="mb-2">
            Обмін товару на аналогічний можливий за наявності на складі. Якщо
            товару немає в наявності — клієнт може:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>очікувати нову поставку;</li>
            <li>отримати інший товар з перерахунком вартості;</li>
            <li>отримати повне повернення коштів.</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            6. Повернення товару неналежної якості
          </h2>
          <p className="mb-2">
            У разі, якщо Ви отримали товар з дефектами, механічними
            пошкодженнями або такий, що не відповідає опису, просимо негайно
            повідомити нас про це.
          </p>
          <p className="mb-2">
            Якщо пошкодження виявлені під час отримання у відділенні Нової
            пошти, рекомендуємо{' '}
            <span className="font-medium">відмовитися від посилки</span> та
            скласти акт разом із представником перевізника. Це дозволить надалі
            пред&#39;явити претензії перевізнику.
          </p>
          <p className="mb-2">
            Для підтвердження дефекту або пошкодження обов’язковим є надання
            фото- або відеофіксації одразу після отримання товару.
          </p>
          <p>
            Подальше врегулювання може включати обмін, ремонт або повернення
            товару відповідно до обставин та чинного законодавства.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold">
            7. Контактна інформація
          </h2>
          <p className="mb-2">
            З усіх питань повернення та обміну звертайтеся до нашої служби
            підтримки:
          </p>
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

        <div className="border-t pt-6 text-sm text-gray-600">
          <p>
            Ми дотримуємося принципів прозорості, поваги до прав споживача та
            законодавчих норм України. Дякуємо за довіру!
          </p>
        </div>
      </div>
    </section>
  );
}
