/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';

const Title = function ({ title }) {
  return <h1>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
