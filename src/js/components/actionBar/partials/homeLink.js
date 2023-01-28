/* eslint-disable func-names */
import React from 'react';
import { Link } from 'react-router-dom';
import MiconHome from '@js/components/micons/home';

const HomeLink = function () {
  return (
    <Link to="/" className="action-link">
      <MiconHome title="home" size="20px" />
      <span className="action-label">Home</span>
    </Link>
  );
};

export default HomeLink;
