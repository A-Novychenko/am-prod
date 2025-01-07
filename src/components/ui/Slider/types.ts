/* eslint-disable @typescript-eslint/no-explicit-any */
export type SliderProps = {
  slideComponent: React.FC<any>;
  slidesData: Record<string, any>[] | [];
  section: 'main-banner' | 'sale';
  wrapClassName?: string;
  slideClassName?: string;
};
