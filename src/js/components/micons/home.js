/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Base from './base';

function Home({ size = '', className = '', title = '' }) {
  return (
    <Base
      size={size}
      className={className}
      title={title}
      path={(
        <path d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z" />
          )}
    />
  );
}

Home.defaultProps = {
  size: '24px',
  className: '',
};

Home.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Home;
