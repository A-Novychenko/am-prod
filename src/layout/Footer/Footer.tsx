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

        <div className="items-center justify-between py-8 xl:flex">
          <div className="items-center justify-between xl:flex xl:w-[433px] smOnly:text-center">
            <WorkSchedule />

            <Socials />
          </div>

          <div className="smOnly:mb-4 smOnly:flex smOnly:justify-center ">
            <Logo />
          </div>

          <div className="gap-8 text-[20px] text-primaryText xl:flex xl:w-[433px] smOnly:text-center">
            <ul className="h-[74px] flex-col items-center justify-between xl:flex">
              <li>
                <Link
                  href={`mailto:${mail}`}
                  className="cursor-pointer transition-all hover:text-accent focus:text-accent smOnly:mb-2 smOnly:inline-block"
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
