/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from '@js/components/markdown/copyToClipboard';

const Pre = function ({ children }) {
  return (
    <pre>
      <CopyToClipboard code={children} />
      {children}
    </pre>
  );
};
Pre.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Pre;
