/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from '@js/components/markdown/copyToClipboard';

const Pre = function ({ children }) {
  return (
    <div className="relative">
      <pre>{children}</pre>
      <div className="absolute top-3 right-4">
        <CopyToClipboard code={children} />
      </div>
    </div>
  );
};
Pre.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Pre;
