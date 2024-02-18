import Image from 'next/image';
import { MainBannerCardProps } from './types';

export const MainBannerCard: React.FC<MainBannerCardProps> = ({
  _id,
  category,
  name,
  description,
  price,
  availability,
  img,
}) => {
  const formatAv = parseFloat(availability.replace('>', '').trim());
  const inStock = formatAv > 0;

  return (
    <div className="flex h-[600px] w-full flex-col items-center justify-between rounded-2xl p-10">
      <div className="size-[300px] bg-slate-600">
        <div className="size-[300px] bg-cover">
          <Image
            src={img}
            width={400}
            height={300}
            alt={name}
            priority
            className="size-full flex-shrink-0"
          />
        </div>
      </div>
      <div className="flex h-[180px] flex-col justify-between">
        <div>
          <p className="mb-4 text-[24px]">{`${category} ${name}`}</p>
          <p className="mb-4">{description}</p>
        </div>
        <div>
          <p className="mb-4 text-[24px] font-semibold">
            {`Ціна ${Number(Number(price) * 1.1).toFixed(0)} грн`}
          </p>
          {inStock && <p className=" text-green-700">В наявності</p>}
          <p className="hidden">{_id}</p>
        </div>
      </div>
    </div>
  );
};
