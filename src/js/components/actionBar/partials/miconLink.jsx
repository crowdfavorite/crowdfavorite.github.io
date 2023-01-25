/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MiconLink = function ({
  label, url, icon, size,
}) {
  return (
    <Link
      className="action-link"
      to={url}
    >
      <i className={`micon micon-${icon} micon-grey micon-${size}`} />
      { label ? <span className="action-label">{label}</span> : null }
    </Link>
  );
};

MiconLink.defaultProps = {
  label: null,
  size: 'xs',
};

MiconLink.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default MiconLink;
