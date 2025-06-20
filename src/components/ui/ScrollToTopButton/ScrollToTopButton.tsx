'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

import Arrow from '~/icons/arrow.svg';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'container fixed bottom-[64px] left-1/2 z-10 -translate-x-1/2 transform xl:bottom-[188px]',
        {
          flex: isVisible,
          'visually-hidden': !isVisible,
        },
      )}
    >
      <button
        aria-label="button"
        className={cn(
          'absolute right-0 top-0 ml-auto flex size-[44px] items-center justify-center rounded-full border border-solid border-white bg-darkBg p-2 transition-colors hover:bg-darkBlueBg focus:bg-darkBlueBg md:right-0',
        )}
        type="button"
        onClick={scrollToTop}
      >
        <Arrow className="-rotate-90 text-lightBg" width={24} height={24} />

        <span className="visually-hidden">scroll button button</span>
      </button>
    </div>
  );
};
