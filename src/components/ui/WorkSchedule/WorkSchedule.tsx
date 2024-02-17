import staticData from '@/data/common.json';

export const WorkSchedule: React.FC = () => {
  const { label, businessDays, saturday, weekends } = staticData.workSchedule;
  return (
    <div>
      <p className="text-[22px] font-semibold">{label}</p>
      <p>{businessDays}</p>
      <p>{saturday}</p>
      <p>{weekends}</p>
    </div>
  );
};
