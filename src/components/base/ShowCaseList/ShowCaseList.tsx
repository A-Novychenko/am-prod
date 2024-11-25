import { ShowCaseCard } from '@/components/ui';

import staticData from '@/data/showCase.json';

export const ShowCaseList: React.FC = () => {
  return (
    <ul className="flex flex-col gap-6 xl:flex-row smOnly:items-center">
      {staticData &&
        staticData.map(({ img, name, description, price }, idx) => (
          <li key={idx} className=" self-stretch">
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
