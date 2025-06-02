import Image from 'next/image';

export const SingleProductImgCard = ({
  url,
  name,
  id,
}: {
  url: string;
  name: string;
  id: number;
}) => {
  return (
    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-gray-100">
      <Image
        width={588}
        height={588}
        src={url}
        alt={`${name}${id}`}
        className="size-full object-contain p-4"
      />
    </div>
  );
};
