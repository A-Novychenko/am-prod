import Link from 'next/link';

import staticData from '@/data/common.json';

import FacebookIcon from '~/icons/facebook.svg';
import InstagramIcon from '~/icons/instagram.svg';
import TelegramIcon from '~/icons/telegram-icon.svg';

export const Socials: React.FC = () => {
  const { title, links } = staticData.socials;

  return (
    <div>
      <p className="text-[22px] font-semibold">{title}</p>
      <ul>
        {links &&
          links.map(({ name, path }, idx) => (
            <li key={idx}>
              <Link
                href={path}
                className="flex cursor-pointer gap-2  transition-all hover:stroke-accent hover:text-accent focus:stroke-accent focus:text-accent"
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
