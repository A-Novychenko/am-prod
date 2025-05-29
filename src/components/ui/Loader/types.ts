/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyObject = {
  [key: string]: any;
};

export type LoaderProps = {
  height?: string;
  width?: string;
  color?: string;
  secondaryColor?: string;
  wrapperStyle?: AnyObject;
};
