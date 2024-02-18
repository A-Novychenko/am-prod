import { CatalogCard } from '@/components/ui';

import staticData from '@/data/main-catalog.json';

export const Catalog: React.FC = () => {
  return (
    <ul className="flex flex-wrap gap-10">
      {staticData &&
        staticData.map(({ name, title }, idx) => (
          <li key={idx}>
            <CatalogCard title={title} name={name} />
          </li>
        ))}
    </ul>
  );
};
