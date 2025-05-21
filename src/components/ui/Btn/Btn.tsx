import { cn } from '@/utils';

import { BtnProps } from './types';

export const Btn: React.FC<BtnProps> = ({
  disabled = false,
  children,
  onClick,
  type = 'button',
  styleType = 'primary',
  className,
}) => {
  const styles = cn(
    'mx-auto cursor-pointer rounded  p-2 text-center font-medium transition-colors',
    {
      'text-primaryText bg-darkBg hover:bg-accent hover:text-secondaryText focus:bg-accent focus:text-secondaryText disabled:bg-slate-300 disabled:text-slate-500':
        styleType === 'primary',
    },
    { '': styleType === 'secondary' },
    {
      'bg-accent hover:bg-darkBg hover:text-primaryText focus:bg-darkBg focus:text-primaryText disabled:bg-slate-300 disabled:text-slate-500':
        styleType === 'accent',
    },
    className,
  );

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
