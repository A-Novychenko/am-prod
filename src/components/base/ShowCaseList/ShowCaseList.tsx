import { ShowCaseCard } from '@/components/ui';

import staticData from '@/data/showCase.json';

export const ShowCaseList: React.FC = () => {
  return (
    <ul className="flex gap-6">
      {staticData &&
        staticData.map(({ img, name, description, price }, idx) => (
          <li key={idx}>
            <ShowCaseCard
              img={img}
              name={name}
              description={description}
              price={price}
            />
          </li>
        ))}
    </ul>
  );
};
