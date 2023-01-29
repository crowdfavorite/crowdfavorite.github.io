/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';

const Download = function ({ size = '', className = '', title = '' }) {
  return (
    <Base
      size={size}
      className={className}
      title={title}
      path={(
        <path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
          )}
    />
  );
};

Download.defaultProps = {
  size: '24px',
  className: '',
};

Download.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Download;
