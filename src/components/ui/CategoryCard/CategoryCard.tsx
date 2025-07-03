import Link from 'next/link';
// import Image from 'next/image';

import staticData from '@/data/common.json';

import OilIcon from '~/icons/catalog/engine-oil-icon.svg';
import FluidIcon from '~/icons/catalog/technical-fluid-icon.svg';
import ChemistryIcon from '~/icons/catalog/chemistry-icon.svg';
import FilterIcon from '~/icons/catalog/filter-icon.svg';
import PartsIcon from '~/icons/catalog/parts-icon.svg';
import AccessoriesIcon from '~/icons/catalog/accessories-icon.svg';
import BatteriesIcon from '~/icons/catalog/batteries-icon.svg';
import PaintsIcon from '~/icons/catalog/paints-icon.svg';
import SaleIcon from '~/icons/catalog/sale-icon.svg';
import EnergyIcon from '~/icons/catalog/energy.svg';

import { CategoryCardProps } from './types';
import { LetterAvatar } from '../LetterAvatar';

const iconsMap: Record<
  number,
  { Component: React.FC<React.SVGProps<SVGSVGElement>>; className?: string }
> = {
  1: { Component: OilIcon, className: 'fill-green-700' },
  2: { Component: FluidIcon },
  3: { Component: ChemistryIcon, className: 'fill-emerald-500' },
  4: { Component: BatteriesIcon },
  5: { Component: PartsIcon, className: 'fill-slate-500' },
  6: { Component: FilterIcon },
  7: { Component: AccessoriesIcon },
  8: { Component: PaintsIcon },
  9: { Component: SaleIcon },
  561: { Component: EnergyIcon },
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  link,
  img = '',
}) => {
  const IconData = iconsMap[id];

  const { noImage } = staticData;

  const image = img && img?.length > 0 ? img : noImage;

  return (
    <Link href={link} key={id + name}>
      <div className="flex flex-col items-center justify-between gap-4 rounded-[16px] bg-lightBg px-2 py-4 xl:h-[228px] ">
        {IconData ? (
          <IconData.Component
            width={120}
            height={120}
            className={`shrink-0 ${IconData.className || ''}`}
          />
        ) : (
          <>
            {img ? (
              <div className="size-full">
                <div className="h-[150px]">
                  {/* <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={name ? name : link}
                    placeholder="blur"
                    blurDataURL={noImage}
                    className="size-full object-contain"
                  /> */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    width={200}
                    height={200}
                    alt={name ? name : link}
                    loading="lazy"
                    className="size-full object-contain"
                  />
                </div>
              </div>
            ) : (
              <LetterAvatar size={150} name={name} id={id} />
            )}
          </>
        )}

        <p className=" mt-auto text-center text-[20px]">{name}</p>
      </div>
    </Link>
  );
};
