/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Copy from '@js/components/micons/Copy';

const CopyToClipboard = function ({ code }) {
  const handleClick = () => navigator.clipboard.writeText(code[0].props.children[0]);
  return (
    <button type="button" onClick={handleClick} className="copy" title="Copy to clipboard">
      <Copy />
    </button>
  );
};

CopyToClipboard.propTypes = {
  code: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CopyToClipboard;
