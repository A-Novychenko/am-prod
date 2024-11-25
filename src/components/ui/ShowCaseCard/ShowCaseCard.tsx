import Image from 'next/image';
import React from 'react';
import { ShowCaseCardProps } from './types';
// import { notFound } from 'next/navigation';

// async function getData(id: string) {
//   if (!id) return;

//   const res = await fetch('https://online.asg.ua/api/product-images', {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization:
//         'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL29ubGluZS5hc2cudWEvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MDg0MTQzMjMsImV4cCI6MTcwODUwMDcyMywibmJmIjoxNzA4NDE0MzIzLCJqdGkiOiJKOGZ6dW1RYVJKRmtpTjhsIiwic3ViIjo3ODcxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.TfrDirG5rDqwnIHNFU0__dHjQtVjchxKcLpMpJcUQ1U',
//     },

//     body: JSON.stringify({ product_ids: [id] }),
//     redirect: 'follow',
//   });
//   if (!res.ok) return notFound();
//   return res.json();
// }

export const ShowCaseCard: React.FC<ShowCaseCardProps> = async ({
  img,
  name,
  description,
  price,
  // id = '1',
}) => {
  // const data = await getData(id);

  // const imgCDN = data?.data[0]?.images[0];
  const imgCDN = null;

  const image = imgCDN ? imgCDN : img;

  return (
    <div className="flex h-[546px] flex-col items-center overflow-hidden rounded-[16px] bg-lightBg md:w-[286px] smOnly:w-full">
      <div className="mt-6 size-[234px] p-6">
        <Image
          src={image}
          width={1064}
          height={1064}
          alt={name}
          className="block size-full object-contain"
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
