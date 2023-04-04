/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Base from './Base';

interface Props {
  size?: string;
  className?: string;
  title?: string;
}

const MiconArrowRight: React.FC<Props> = ({
  size = '24px',
  className = '',
  title = '',
}): JSX.Element => (
  <Base
    size={size}
    className={className}
    title={title}
    path={(
      <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
      </>
          )}
  />
);

export default MiconArrowRight;
