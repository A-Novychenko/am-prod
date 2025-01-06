import Link from 'next/link';
import Image from 'next/image';

import OilIcon from '~/icons/catalog/engine-oil-icon.svg';
import FluidIcon from '~/icons/catalog/technical-fluid-icon.svg';
import ChemistryIcon from '~/icons/catalog/chemistry-icon.svg';
import FilterIcon from '~/icons/catalog/filter-icon.svg';
import PartsIcon from '~/icons/catalog/parts-icon.svg';
import AccessoriesIcon from '~/icons/catalog/accessories-icon.svg';
import BatteriesIcon from '~/icons/catalog/batteries-icon.svg';
import PaintsIcon from '~/icons/catalog/paints-icon.svg';
import SaleIcon from '~/icons/catalog/sale-icon.svg';

import { CategoryCardProps } from './types';

const IMG_DEFAULT =
  'https://img.freepik.com/free-vector/illustration-of-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1707868800&semt=sph';

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
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  link,
  nameCat,
  img = '',
}) => {
  const IconData = iconsMap[id];

  const image = img && img?.length > 0 ? img : IMG_DEFAULT;

  return (
    <Link
      href={{
        pathname: link,
        query: { name, nameCat, typeGallery: 'list' },
      }}
    >
      <div className="flex flex-col items-center justify-between gap-4 rounded-[16px] bg-lightBg px-2 py-4 xl:h-[228px] ">
        {IconData ? (
          <IconData.Component
            width={120}
            height={120}
            className={`shrink-0 ${IconData.className || ''}`}
          />
        ) : (
          <>
            {img && (
              <div className="size-full">
                <div className="h-[150px]">
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={nameCat ? nameCat : link}
                    placeholder="blur"
                    blurDataURL={IMG_DEFAULT}
                    className="size-full object-contain"
                  />
                </div>
              </div>
            )}
          </>
        )}

        <p className=" mt-auto text-center text-[20px]">{name}</p>
      </div>
    </Link>
  );
};
