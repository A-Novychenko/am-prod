export const CastrolSeoSection = () => {
  return (
    <section className="bg-white px-4 py-8 text-gray-800 sm:px-6 md:py-12 xl:px-20 xl:py-16">
      <div className="container">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Чому варто обрати продукцію Castrol?
        </h2>

        <p className="mb-4 text-sm leading-relaxed sm:text-base">
          Продукція <strong>Castrol</strong> — це синонім надійності, інновацій
          та високої якості у світі мастильних матеріалів. Вона створена для
          стабільної та ефективної роботи вашої техніки — від легкових авто до
          спецобладнання.
        </p>

        <ul className="mb-4 list-inside list-disc space-y-1 text-sm sm:text-base">
          <li>Високий рівень захисту двигуна, трансмісії та інших систем</li>
          <li>Стабільна робота навіть за складних умов</li>
          <li>Схвалено провідними автовиробниками</li>
          <li>Зменшення зносу та продовження ресурсу техніки</li>
        </ul>

        <p className="mb-4 text-sm leading-relaxed sm:text-base">
          У нашому асортименті ви знайдете моторні оливи, трансмісійні та
          гальмівні рідини, а також мастила для різноманітної техніки. Уся
          продукція — <strong>оригінальна</strong> і постачається з офіційних
          джерел.
        </p>

        <p className="mb-6 text-sm sm:text-base">
          Обираючи <strong>Castrol</strong>, Ви інвестуєте у довговічність і
          безпеку вашого авто.
        </p>

        <div className="rounded-xl bg-gray-100 p-4 text-sm text-gray-700 sm:p-6 sm:text-base">
          🔧 <em>Потрібна допомога з вибором?</em> Зверніться до нашого
          консультанта — ми допоможемо підібрати оптимальний варіант.
        </div>

        {/* SEO-контент для пошукових систем */}
        <div className="sr-only">
          Купити Castrol, моторна олива Castrol 5W-30, синтетична олива Castrol
          EDGE, Castrol MAGNATEC, гальмівна рідина Castrol, трансмісійна олива
          Castrol, Castrol для дизельного двигуна, Castrol для бензинового
          двигуна, оригінальна олива Castrol Україна, мастило Castrol, Castrol
          ціна, Castrol доставка.
        </div>
      </div>
    </section>
  );
};
