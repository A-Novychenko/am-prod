import Link from 'next/link';

import staticData from '@/data/common.json';

export const FooterLinks: React.FC = () => {
  const { footerLinks } = staticData;

  return (
    <nav>
      <ul className="flex justify-between border-b border-white/30">
        {footerLinks &&
          footerLinks.map(({ name, href }, idx) => (
            <li key={idx} className="p-4">
              <Link
                href={`/${href}`}
                className="cursor-pointer text-[16px] uppercase transition-all hover:text-accent"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
