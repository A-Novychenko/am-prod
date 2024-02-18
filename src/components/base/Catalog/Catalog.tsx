import { CatalogCard } from '@/components/ui';

import staticData from '@/data/mainCatalog.json';

export const Catalog: React.FC = () => {
  return (
    <ul className="flex flex-wrap gap-10">
      {staticData &&
        staticData.map(({ name, title }, idx) => (
          <li key={idx} className="scale-100 transition-all hover:scale-105">
            <CatalogCard title={title} name={name} />
          </li>
        ))}
    </ul>
  );
};
