'use client';

import { cn } from '@/utils';
import { useRouter } from 'next/navigation';

import { RiArrowGoBackFill } from 'react-icons/ri';

export const BackBtn: React.FC<{
  className?: string;
  text?: string;
  showIcon?: boolean;
}> = ({ className, text, showIcon = true }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={cn(
        'flex gap-2 rounded-[8px] bg-slate-50 px-4 py-2',
        className,
      )}
      aria-label="Повернутись на попередню сторінку"
    >
      {showIcon && <RiArrowGoBackFill size={16} />}{' '}
      {text && <span>{text}</span>}
    </button>
  );
};
