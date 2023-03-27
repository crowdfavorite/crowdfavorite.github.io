/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Base from './Base';

interface Props {
  size?: string;
  className?: string;
  title?: string;
}

const MiconHome = ({ size = '24px', className = '', title = '' }: Props): JSX.Element => (
  <Base
    size={size}
    className={className}
    title={title}
    path={(
      <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z" />
    )}
  />
);

export default MiconHome;
