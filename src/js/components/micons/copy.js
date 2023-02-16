/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';

const Copy = function ({ size = '' }) {
  return (
    <Base
      size={size}
      title="Copy to clipboard"
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
};

Copy.defaultProps = {
  size: '24px',
};

Copy.propTypes = {
  size: PropTypes.string,
};

export default Copy;
