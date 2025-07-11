import Link from 'next/link';

import {
  Contacts,
  FooterLinks,
  Logo,
  Socials,
  WorkSchedule,
} from '@/components/ui';

import staticData from '@/data/common.json';
import Image from 'next/image';

export const Footer = () => {
  const { mail, site, siteName } = staticData;

  return (
    <footer className=" bg-darkBg text-primaryText">
      <div className="container">
        <FooterLinks />

        <div className="items-center justify-between py-8 xl:flex">
          <div className="justify-between md:flex md:flex-row xl:gap-10 smOnly:text-center">
            <WorkSchedule labelClassName="text-[22px] font-semibold mb-2" />

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

        <div className="border-t border-white/10 pb-4 pt-6 text-sm text-primaryText/70">
          <div
            className="
      flex flex-col items-center gap-4 text-center
      sm:flex-row sm:justify-between sm:text-left
      md:flex-col md:items-center md:gap-4 md:text-center
      xl:flex-row xl:justify-between xl:text-left
    "
          >
            <div>
              <span className="text-primaryText/80">
                © 2012–{new Date().getFullYear()} Avto-Magaz.com.ua
              </span>
              <span className="ml-1 align-super text-xs text-primaryText/50">
                ®
              </span>{' '}
              Всі права захищено.
            </div>

            <div
              className="
        flex flex-col items-center gap-1
        sm:flex-row sm:gap-2
        md:flex-col md:gap-1
        xl:flex-row xl:gap-2
      "
            >
              <span>Розроблено студією</span>
              <Link
                href="https://www.webdevsynergy.com.ua/uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[6px] p-2 transition-opacity hover:bg-lightBg/10 hover:opacity-90"
              >
                <Image
                  src="/images/wds-logo.png"
                  alt="WebDevSynergy logo"
                  width={140}
                  height={32}
                  className="size-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
