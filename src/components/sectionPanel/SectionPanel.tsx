import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  header: ReactNode;
};

const SectionPanel: React.FC<Props> = ({ children, header }) => {
  return (
    <div className='flex flex-col shadow-sm rounded-sm'>
      {header}
      <div className='p-4'>{children}</div>
    </div>
  );
};

export default SectionPanel;
