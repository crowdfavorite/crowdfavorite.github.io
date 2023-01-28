/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';

function Base({
  size, className, title, path,
}) {
  const baseClasses = `inline-block align-middle${className ? ` ${className}` : ''}`;
  return (
    <i
      className={baseClasses}
      title={title}
    >
      <svg
        className="micon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        fill="currentColor"
      >
        { path }
      </svg>
    </i>
  );
}

Base.defaultProps = {
  size: '24px',
  className: '',
  path: '',
};

Base.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default Base;
