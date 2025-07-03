// import Image from 'next/image';
import React from 'react';
import { ShowCaseCardProps } from './types';

export const ShowCaseCard: React.FC<ShowCaseCardProps> = async ({
  img,
  name,
  description,
  price,
}) => {
  const imgCDN = null;

  const image = imgCDN ? imgCDN : img;

  return (
    <div className="flex h-[546px] flex-col items-center overflow-hidden rounded-[16px] bg-lightBg md:w-[286px] smOnly:w-full">
      <div className="mt-6 size-[234px] p-6">
        {/* <Image
          src={image}
          width={1064}
          height={1064}
          alt={name}
          className="block size-full object-contain"
        /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          width={1064}
          height={1064}
          alt={name}
          className="block size-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-6 smOnly:w-full">
        <h3 className="mb-2 line-clamp-1 overflow-hidden text-ellipsis text-[16px] font-semibold uppercase leading-[1.5] text-secondaryText">
          {name}
        </h3>
        <p className="mb-4 line-clamp-2 h-[48px] overflow-hidden text-ellipsis text-[16px] font-normal leading-[1.5] text-secondaryText">
          {description}
        </p>
        <p className="mb-4 overflow-hidden text-ellipsis text-right text-[20px] font-bold uppercase leading-[1.6] text-darkBlueText">
          {`${Number(Number(price) * 1.1).toFixed(0)} грн`}
        </p>
        <button
          type="button"
          className="mx-auto block h-[48px] w-[186px] rounded-[8px] bg-darkBlueBg text-[14px] font-bold uppercase leading-[1.7] text-primaryText transition-all hover:bg-darkBg/85"
        >
          Купити
        </button>
      </div>
    </div>
  );
};
