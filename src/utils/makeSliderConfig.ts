import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import { SliderProps } from '@/components/ui/Slider/types';

enum Sections {
  MAIN_BANNER = 'main-banner',
  SALE = 'sale',
  SINGLE_PAGE = 'single-page',
}

export const makeSliderConfig = ({
  section,
  wrapClassName,
}: Partial<SliderProps>) => {
  const slidesPerViewBase = 1;

  const spaceBetweenBase = 16;

  const autoplayBase =
    section === Sections.MAIN_BANNER
      ? { delay: 3000, disableOnInteraction: false }
      : false;

  let loopBase: boolean;

  let spaceBetweenTab: number;
  let slidesPerViewTab: number;

  let slidesPerViewDesk: number;
  let spaceBetweenDesk: number;

  let paginationBase: boolean | { clickable: boolean } = false;

  switch (section) {
    case Sections.MAIN_BANNER:
      loopBase = true;

      slidesPerViewTab = 1;
      spaceBetweenTab = 16;

      slidesPerViewDesk = 1;
      spaceBetweenDesk = 24;

      break;

    case Sections.SALE:
      loopBase = false;

      slidesPerViewTab = 1;
      spaceBetweenTab = 16;

      slidesPerViewDesk = 1;
      spaceBetweenDesk = 24;

      paginationBase = { clickable: true };

      break;

    case Sections.SINGLE_PAGE:
      loopBase = true;

      slidesPerViewTab = 1;
      spaceBetweenTab = 16;

      slidesPerViewDesk = 1;
      spaceBetweenDesk = 24;

      paginationBase = { clickable: true };

      break;

    default:
      loopBase = false;

      spaceBetweenTab = 16;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 3;
      spaceBetweenDesk = 24;
  }

  return {
    className: wrapClassName,
    updateOnWindowResize: true,
    wrapperTag: 'ul',
    modules: [Navigation, Autoplay, Pagination],
    speed: 2000,
    lazyPreloadPrevNext: 1,
    navigation: {
      prevEl: `.slider-prev-btn-${section}`,
      nextEl: `.slider-next-btn-${section}`,
    },
    allowTouchMove: true,
    loop: loopBase,
    spaceBetween: spaceBetweenBase,
    slidesPerView: slidesPerViewBase,
    autoplay: autoplayBase,
    pagination: paginationBase,

    breakpoints: {
      768: {
        spaceBetween: spaceBetweenTab,
        slidesPerView: slidesPerViewTab,
      },
      1280: {
        slidesPerView: slidesPerViewDesk,
        spaceBetween: spaceBetweenDesk,
      },
    },
  };
};
