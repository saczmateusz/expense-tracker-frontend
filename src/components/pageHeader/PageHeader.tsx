import React, { ReactNode } from 'react';

type Props = {
  title: string;
  menu?: ReactNode;
};

const PageHeader: React.FC<Props> = ({ title, menu }) => {
  return (
    <div className='relative'>
      <h1 className='text-center text-3xl my-5 font-semibold'>{title}</h1>
      <div className='absolute top-0 right-0'>{menu}</div>
    </div>
  );
};

export default PageHeader;
