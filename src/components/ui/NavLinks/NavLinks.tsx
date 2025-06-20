import Link from 'next/link';

import staticData from '@/data/common.json';

import styles from './NavLinks.module.css';

export const NavLinks: React.FC = () => {
  const { navLinks } = staticData;

  return (
    <nav className="">
      <ul className="flex flex-wrap justify-center gap-[2px] border-white/30">
        {navLinks &&
          navLinks.map(({ name, href }, idx) => (
            <li key={idx} className={styles.gridItem}>
              <Link
                href={`/${href}`}
                className="block cursor-pointer rounded-[4px] bg-mediumBg/20 px-10 py-3 text-center text-[16px] font-bold uppercase transition-all
                hover:scale-y-110 hover:text-accent focus:scale-y-110 focus:text-accent"
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
