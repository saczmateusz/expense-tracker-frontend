import React from 'react';

type Props = {
  label: string;
  action: VoidFunction;
  // TODO: variant
};

const Button: React.FC<Props> = ({ label, action }) => {
  return (
    <button
      onClick={action}
      className='rounded-md bg-indigo-400 px-3.5 py-1.5 text-white cursor-pointer'
    >
      {label}
    </button>
  );
};

export default Button;
