import {
  Contacts,
  FooterLinks,
  Logo,
  Socials,
  WorkSchedule,
} from '@/components/ui';

import staticData from '@/data/common.json';
import Link from 'next/link';

export const Footer = () => {
  const { mail, site, siteName } = staticData;

  return (
    <footer className=" bg-darkBg text-primaryText">
      <div className="container">
        <FooterLinks />
        <div className="flex items-center justify-between py-8">
          <div className="flex w-[433px] items-center justify-between">
            <WorkSchedule />
            <Socials />
          </div>
          <Logo />

          <div className="flex w-[433px] gap-8 text-[20px] text-primaryText">
            <ul className="flex h-[74px] flex-col items-center justify-between">
              <li>
                <Link
                  href={`mailto:${mail}`}
                  className="cursor-pointer transition-all hover:text-accent focus:text-accent"
                >
                  {mail}
                </Link>
              </li>
              <li>
                <Link
                  href={site}
                  className="cursor-pointer transition-all hover:text-accent focus:text-accent"
                >
                  {siteName}
                </Link>
              </li>
            </ul>
            <Contacts />
          </div>
        </div>
      </div>
    </footer>
  );
};
