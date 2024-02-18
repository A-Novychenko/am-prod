import Link from 'next/link';

import staticData from '@/data/common.json';

export const Contacts: React.FC = () => {
  const {
    phone: { kyivstar, lifecell, lifecellText, kyivstarText },
  } = staticData.contacts;
  return (
    <ul className="flex flex-col gap-4 text-[24px] text-primaryText">
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
