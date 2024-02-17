/* eslint-disable @typescript-eslint/no-explicit-any */
export type SliderProps = {
  slideComponent: React.FC<any>;
  slidesData: Record<string, any>[] | [];
  wrapClassName?: string;
  slideClassName?: string;
};
