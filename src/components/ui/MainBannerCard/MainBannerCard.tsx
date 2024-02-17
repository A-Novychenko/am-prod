import { MainBannerCardProps } from './types';

export const MainBannerCard: React.FC<MainBannerCardProps> = ({
  _id,
  //   code,
  category,
  //   article,
  name,
  description,
  //   brandGroup,
  //   brandArticle,
  price,
  availability,
}) => {
  const formatAv = parseFloat(availability.replace('>', '').trim());
  const inStock = formatAv > 0;

  console.log('formatAv', formatAv);
  return (
    <div className="h-[400px] w-full rounded-2xl bg-teal-500 p-10">
      <p>{`${category} ${name}`}</p>
      <p>{description}</p>
      <p>{`Ціна ${Number(Number(price) * 1.1).toFixed(0)}грн`}</p>
      {inStock && <p>В наявності</p>}
      <p className="hidden">{_id}</p>
    </div>
  );
};
