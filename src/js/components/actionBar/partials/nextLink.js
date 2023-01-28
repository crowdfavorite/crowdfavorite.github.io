/* eslint-disable func-names */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MiconArrowRight from '@js/components/micons/arrow_right';

const NextLink = function ({ url }) {
  return (
    <Link className="action-link" to={url}>
      <MiconArrowRight title="Next" />
      <span className="action-label">Next</span>
    </Link>
  );
};

NextLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default NextLink;
