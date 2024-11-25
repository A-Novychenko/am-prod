'use client';

import Link from 'next/link';
import { Popover } from '@headlessui/react';

import staticData from '@/data/common.json';

export const Assistance = () => {
  const { telegram, viber } = staticData.contacts;
  const { label, textTG, textViber, textReCall } = staticData.assistance;

  return (
    <Popover className="relative w-full text-center smOnly:mt-2">
      <Popover.Button> {label}</Popover.Button>

      <Popover.Panel className="absolute z-10 bg-lightBg text-secondaryText">
        <div className="grid grid-cols-2">
          <Link
            href={`tg://resolve?domain=${telegram}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {textTG}
          </Link>

          <Link
            href={`viber://add?number=${viber}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {textViber}
          </Link>

          <button type="button">{textReCall}</button>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
