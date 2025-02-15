import React from 'react';

type Props = {
  title: string;
};

const SectionHeader: React.FC<Props> = ({ title }) => {
  return <h3 className='p-4 bg-blue-100 text-2xl font-medium'>{title}</h3>;
};

export default SectionHeader;
