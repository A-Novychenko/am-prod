import { Loader } from '@/components/ui';

import { generateStatusColor, generateStatusText } from '@/utils';

export const CartOrderStatus: React.FC<{ status: OrderStatus | null }> = ({
  status,
}) => {
  if (!status)
    return (
      <div className="flex items-center justify-center font-semibold">
        <Loader
          height={'20'}
          width={'20'}
          color="#101340"
          secondaryColor="#101340"
          wrapperStyle={{}}
        />
      </div>
    );

  const statusColor = generateStatusColor(status);

  return (
    <>
      <p className="font-semibold" style={{ color: statusColor }}>
        {generateStatusText(status)}
      </p>
    </>
  );
};
