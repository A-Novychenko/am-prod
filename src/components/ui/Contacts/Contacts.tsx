import Link from 'next/link';

import { cn } from '@/utils';

import staticData from '@/data/common.json';

import { ContactsProps } from './types';

export const Contacts: React.FC<ContactsProps> = ({ classNameWrap }) => {
  const {
    phone: { kyivstar, lifecell, lifecellText, kyivstarText },
  } = staticData.contacts;

  return (
    <ul
      className={cn(
        'flex flex-col gap-4 text-primaryText xl:text-[20px]',
        classNameWrap,
      )}
    >
      <li>
        <Link
          href={`tel:${lifecell}`}
          className="cursor-pointer transition-all hover:text-accent focus:text-accent"
        >
          {lifecellText}
        </Link>
      </li>

      <li>
        <Link
          href={`tel:${kyivstar}`}
          className="cursor-pointer transition-all hover:text-accent focus:text-accent"
        >
          {kyivstarText}
        </Link>
      </li>
    </ul>
  );
};
