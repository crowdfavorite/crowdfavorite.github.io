/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Base from './Base';

interface Props {
  size?: string;
  className?: string;
  title?: string;
}

const MiconArrowBack = ({ size = '', className = '', title = '' }: Props): JSX.Element => (
  <Base
    size={size}
    className={className}
    title={title}
    path={(
      <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </>
          )}
  />
);

export default MiconArrowBack;
