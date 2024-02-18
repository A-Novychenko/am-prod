import staticData from '@/data/common.json';

export const WorkSchedule: React.FC = () => {
  const { label, businessDays, saturday, weekends } = staticData.workSchedule;
  return (
    <div>
      <p className="text-[22px] font-semibold">{label}</p>
      <ul>
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
