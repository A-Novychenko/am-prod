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
          <div className="justify-between md:flex md:flex-row xl:gap-10 smOnly:text-center">
            <WorkSchedule labelClassName="text-[22px] font-semibold" />

            <Socials />
          </div>

          <div className="my-4 xl:my-0 smOnly:flex smOnly:justify-center">
            <Logo />
          </div>

          <div
            className="flex flex-col justify-between gap-8 text-[20px] text-primaryText md:flex-row 
        xl:items-baseline xl:gap-10 smOnly:text-center"
          >
            <ul className="flex-col items-center justify-between gap-4 md:flex md:items-stretch ">
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

            <Contacts classNameWrap="xl:text-[20px] md:justify-between" />
          </div>
        </div>
      </div>
    </footer>
  );
};
