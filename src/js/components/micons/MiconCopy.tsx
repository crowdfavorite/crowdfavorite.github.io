/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Base from './Base';

interface Props {
  size?: string;
  className?: string;
  title?: string;
}

const MiconCopy = ({ size = '20px', className = '', title = 'Copy to clipboard' }: Props): JSX.Element => (
  <Base
    size={size}
    className={className}
    title={title}
    path={(
      <g>
        <g>
          <g>
            <path d="M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z" />
          </g>
        </g>
      </g>
      )}
  />
);

export default MiconCopy;
