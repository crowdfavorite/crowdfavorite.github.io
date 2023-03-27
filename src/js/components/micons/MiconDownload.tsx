/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Base from './Base';

interface Props {
  size?: string;
  className?: string;
  title?: string;
}

const MiconDownload = ({ size = '24px', className = '', title = '' }: Props): JSX.Element => (
  <Base
    size={size}
    className={className}
    title={title}
    path={(
      <path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
    )}
  />
);

export default MiconDownload;
