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
import Link from 'next/link';

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  link,
}) => {
  return (
    <Link href={link}>
      <div className="flex h-[380px] w-[378.67px] flex-col items-center justify-between gap-6 rounded-[16px] bg-lightBg p-8">
        {id === 1 && (
          <OilIcon
            width={180}
            height={180}
            className="shrink-0 fill-green-700"
          />
        )}
        {id === 2 && (
          <FluidIcon width={180} height={180} className="shrink-0" />
        )}
        {id === 3 && (
          <ChemistryIcon
            width={180}
            height={180}
            className="shrink-0 fill-emerald-500"
          />
        )}
        {id === 4 && (
          <BatteriesIcon width={180} height={180} className="shrink-0" />
        )}
        {id === 5 && (
          <PartsIcon
            width={180}
            height={180}
            className="shrink-0 fill-slate-500"
          />
        )}
        {id === 6 && (
          <FilterIcon width={180} height={180} className="shrink-0" />
        )}
        {id === 7 && (
          <AccessoriesIcon width={180} height={180} className="shrink-0" />
        )}
        {id === 8 && (
          <PaintsIcon width={180} height={180} className="shrink-0" />
        )}
        {id === 9 && <SaleIcon width={180} height={180} className="shrink-0" />}
        <p className="pb-10 text-[24px]">{name}</p>
      </div>
    </Link>
  );
};
