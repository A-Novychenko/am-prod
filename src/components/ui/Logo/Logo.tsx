// import Link from 'next/link';

// export const Logo: React.FC = () => {
//   return (
//     <Link href="/" className="cursor-pointer">
//       <div className="relative h-[125px] w-[85px] leading-none">
//         <p className="font-lora text-[96px] font-bold uppercase text-red">A</p>

//         <p className="absolute left-[53px] top-[55px] -translate-x-1/2 font-lora text-[72px] font-semibold uppercase text-yellow-400">
//           M
//         </p>
//       </div>
//     </Link>
//   );
// };

import Link from 'next/link';

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <div className="relative h-[100px] w-[85px] leading-none">
        <p className="font-lora text-[80px] font-bold uppercase text-red">A</p>

        <p className="absolute left-[43px] top-[45px] -translate-x-1/2 font-lora text-[64px] font-semibold uppercase text-yellow-400">
          M
        </p>
      </div>
    </Link>
  );
};
