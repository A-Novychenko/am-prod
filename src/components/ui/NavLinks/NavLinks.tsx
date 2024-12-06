import Link from 'next/link';

import staticData from '@/data/common.json';

export const NavLinks: React.FC = () => {
  const { navLinks } = staticData;

  return (
    <nav className="hidden xl:block">
      <ul className="justify-between border-t border-white/30 xl:flex">
        {navLinks &&
          navLinks.map(({ name, href }, idx) => (
            <li key={idx} className="py-1">
              <Link
                href={`/${href}`}
                className="cursor-pointer py-1 text-[16px] uppercase transition-all hover:text-accent"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
