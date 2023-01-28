/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';

const MiconArrowBack = function ({ size = '', className = '', title = '' }) {
  return (
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
};

MiconArrowBack.defaultProps = {
  size: '24px',
  className: '',
};

MiconArrowBack.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MiconArrowBack;
