'use client';

import { Oval } from 'react-loader-spinner';

export const Loader: React.FC = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#101340"
      secondaryColor="#101340"
      ariaLabel="oval-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        stroke: 'blue',
      }}
      wrapperClass=""
    />
  );
};
