/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';

interface Props {
  size?: string;
  className?: string;
  title?: string;
  path: JSX.Element;
}

const Base = ({
  size = '24px',
  className = '',
  title,
  path,
}: Props): JSX.Element => {
  const baseClasses = `inline-block align-middle${className ? ` ${className}` : ''}`;
  return (
    <i
      className={baseClasses}
      title={title}
    >
      <svg
        className="micon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        fill="currentColor"
      >
        { path }
      </svg>
    </i>
  );
};

export default Base;
