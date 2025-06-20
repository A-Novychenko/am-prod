'use client';

import { MagnifyingGlass, Oval } from 'react-loader-spinner';
import { LoaderProps } from './types';

const pageWrapStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  stroke: 'blue',
};

export const Loader: React.FC<LoaderProps> = ({
  height = '80',
  width = '80',
  color = '#101340',
  secondaryColor = '#101340',
  wrapperStyle = pageWrapStyle,
  isSearch,
}) => {
  return (
    <>
      <Oval
        visible={!isSearch}
        height={height}
        width={width}
        color={color}
        secondaryColor={secondaryColor}
        ariaLabel="oval-loading"
        wrapperStyle={wrapperStyle}
        wrapperClass=""
      />

      <MagnifyingGlass
        visible={isSearch}
        height={height}
        width={width}
        color={color}
        glassColor={secondaryColor}
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={wrapperStyle}
        wrapperClass="magnifying-glass-wrapper"
      />
    </>
  );
};
