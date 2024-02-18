'use client';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { SliderProps } from './types';

export const Slider: React.FC<SliderProps> = ({
  slideClassName,
  slidesData,
  slideComponent: SlideComponent,
  wrapClassName,
}) => {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      //   onSwiper={swiper => console.log(swiper)}
      autoplay={{ delay: 10000 }}
      className={wrapClassName}
    >
      {slidesData &&
        slidesData.map((card, idx) => (
          <SwiperSlide
            tag="li"
            className={slideClassName}
            key={card.id ? card.id : idx}
          >
            <SlideComponent {...card} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
