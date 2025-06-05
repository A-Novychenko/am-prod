import Link from 'next/link';

import staticData from '@/data/common.json';

export const NavLinks: React.FC = () => {
  const { navLinks } = staticData;

  return (
    <nav className="hidden xl:block">
      <ul className="justify-around border-white/30 xl:flex">
        {navLinks &&
          navLinks.map(({ name, href }, idx) => (
            <li key={idx} className="grow py-1">
              <Link
                href={`/${href}`}
                className="block cursor-pointer border-x border-black bg-mediumBg/20 px-10 py-3 text-center text-[16px] font-bold uppercase transition-all hover:scale-y-110 hover:text-accent focus:scale-y-110 focus:text-accent"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
