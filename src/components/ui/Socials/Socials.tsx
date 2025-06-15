import Link from 'next/link';

import staticData from '@/data/common.json';

import FacebookIcon from '~/icons/facebook.svg';
import InstagramIcon from '~/icons/instagram.svg';
import TelegramIcon from '~/icons/telegram-icon.svg';

export const Socials: React.FC = () => {
  const { title, links } = staticData.socials;

  return (
    <div className="smOnly:mb-4">
      <p className="text-[22px] font-semibold smOnly:mb-2">{title}</p>

      <ul className="gap-2 smOnly:flex smOnly:flex-col smOnly:items-center">
        {links &&
          links.map(({ name, path }, idx) => (
            <li key={idx} className="md:mb-2 md:last:mb-0">
              <Link
                href={path}
                className="flex cursor-pointer gap-2 py-2 transition-all hover:stroke-accent hover:text-accent focus:stroke-accent focus:text-accent smOnly:mb-2"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {name === 'telegram' && <TelegramIcon width={18} height={18} />}
                {name === 'instagram' && (
                  <InstagramIcon width={18} height={18} />
                )}
                {name === 'facebook' && <FacebookIcon width={18} height={18} />}
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
