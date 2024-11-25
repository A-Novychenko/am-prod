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
    <div className="flex h-[440px] w-full flex-col items-center justify-between rounded-2xl  p-4 xl:h-[600px] xl:p-10">
      <div className="h-[150px] xl:size-[300px] smOnly:mb-4">
        <div className="h-[150px] xl:size-[300px]">
          <Image
            src={img}
            width={300}
            height={400}
            alt={name}
            priority
            className="block size-full shrink-0 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between xl:h-[180px]">
        <div>
          <p className="mb-4 xl:text-[24px]">{`${category} ${name}`}</p>
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
