import { cn } from '@/utils';

import staticData from '@/data/common.json';

export const WorkSchedule: React.FC<{ labelClassName?: string }> = ({
  labelClassName,
}) => {
  const { label, businessDays, weekends, address } = staticData.workSchedule;
  return (
    <div className="smOnly:mb-4">
      <p
        className={cn('text-[18px] font-semibold smOnly:mb-2', labelClassName)}
      >
        {label}
      </p>

      <ul className="text-[14px]/normal">
        <li>
          <p>{businessDays}</p>
        </li>

        <li>
          <p>{weekends}</p>
        </li>
        <li>
          <p>{address}</p>
        </li>
      </ul>
    </div>
  );
};
