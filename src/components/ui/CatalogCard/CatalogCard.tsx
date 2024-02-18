import OilIcon from '~/icons/catalog/engine-oil-icon.svg';
import FluidIcon from '~/icons/catalog/technical-fluid-icon.svg';
import ChemistryIcon from '~/icons/catalog/chemistry-icon.svg';
import FilterIcon from '~/icons/catalog/filter-icon.svg';
import PartsIcon from '~/icons/catalog/parts-icon.svg';
import AccessoriesIcon from '~/icons/catalog/accessories-icon.svg';
import BatteriesIcon from '~/icons/catalog/batteries-icon.svg';
import PaintsIcon from '~/icons/catalog/paints-icon.svg';
import SaleIcon from '~/icons/catalog/sale-icon.svg';

import { CatalogCardProps } from './types';

export const CatalogCard: React.FC<CatalogCardProps> = ({ title, name }) => {
  return (
    <div className="flex h-[380px] w-[378.67px] flex-col items-center justify-between gap-6 rounded-[16px] bg-lightBg p-8">
      {name === 'oil' && (
        <OilIcon width={180} height={180} className="shrink-0 fill-green-700" />
      )}
      {name === 'fluids' && (
        <FluidIcon width={180} height={180} className="shrink-0" />
      )}
      {name === 'chemistry' && (
        <ChemistryIcon
          width={180}
          height={180}
          className="shrink-0 fill-emerald-500"
        />
      )}
      {name === 'filters' && (
        <FilterIcon width={180} height={180} className="shrink-0" />
      )}
      {name === 'parts' && (
        <PartsIcon
          width={180}
          height={180}
          className="shrink-0 fill-slate-500"
        />
      )}
      {name === 'accessories' && (
        <AccessoriesIcon width={180} height={180} className="shrink-0" />
      )}
      {name === 'batteries' && (
        <BatteriesIcon width={180} height={180} className="shrink-0" />
      )}
      {name === 'paints' && (
        <PaintsIcon width={180} height={180} className="shrink-0" />
      )}
      {name === 'sale' && (
        <SaleIcon width={180} height={180} className="shrink-0" />
      )}
      <p className="pb-10 text-[24px]">{title}</p>
    </div>
  );
};
