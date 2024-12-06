import staticData from '@/data/common.json';

export const WorkSchedule: React.FC = () => {
  const { label, businessDays, saturday, weekends } = staticData.workSchedule;
  return (
    <div className="smOnly:mb-4">
      <p className="text-[18px] font-semibold smOnly:mb-2">{label}</p>

      <ul className="text-[14px]/normal">
        <li>
          <p>{businessDays}</p>
        </li>
        <li>
          <p>{saturday}</p>
        </li>
        <li>
          <p>{weekends}</p>
        </li>
      </ul>
    </div>
  );
};
