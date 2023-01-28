/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';

function MiconArrowRight({ size, className, title }) {
  return (
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
}

MiconArrowRight.defaultProps = {
  size: '24px',
  className: '',
};

MiconArrowRight.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MiconArrowRight;
