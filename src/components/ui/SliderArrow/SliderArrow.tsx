'use client';

import { cn } from '@/utils/cn';

import { SliderArrowProps } from './types';

// import data from '@/data/common.json';
import ControlIcon from '~/icons/arrow.svg';

import styles from './SliderArrow.module.css';

export const SliderArrow: React.FC<SliderArrowProps> = ({
  section,
  wrapClassName,
}) => {
  //   const {
  //     arrowSlider: {
  //       prevBtnAriaLabel,
  //       nextBtnAriaLabel,
  //       prevIconAriaLabel,
  //       nextIconAriaLabel,
  //     },
  //   } = data;
  return (
    <div
      className={cn(
        // '2xl:w-[144px] md:w-[120px] xl:w-[130px]',
        'flex justify-between',
        wrapClassName,
      )}
    >
      <button
        className={cn(
          `slider-prev-btn-${section}`,
          'ctrlSliderBtn',
          styles.btn,
        )}
        type="button"
        // aria-label={prevBtnAriaLabel}
      >
        <ControlIcon
          width={40}
          height={40}
          className={`size-[20px] rotate-180 md:size-[24px] xl:size-[40px]`}
          //   aria-label={prevIconAriaLabel}
        />
      </button>

      <button
        className={cn(
          `slider-next-btn-${section}`,
          'ctrlSliderBtn',
          styles.btn,
        )}
        type="button"
        // aria-label={nextBtnAriaLabel}
      >
        <ControlIcon
          width={40}
          height={40}
          className="size-[20px] md:size-[24px] xl:size-[40px]"
          //   aria-label={nextIconAriaLabel}
        />
      </button>
    </div>
  );
};
