/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import MiconHome from '@js/components/micons/MiconHome';

const HomeLink = () => (
  <Link to="/" className="action-link">
    <MiconHome title="home" size="20px" />
    <span className="action-label">Home</span>
  </Link>
);

export default HomeLink;
