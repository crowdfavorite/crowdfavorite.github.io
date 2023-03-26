/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '@js/components/micons/ArrowRight';

interface Props {
  url: string;
}

const NextLink = ({ url }: Props): JSX.Element => (
  <Link className="action-link" to={url}>
    <ArrowRight title="Next" />
    <span className="action-label">Next</span>
  </Link>
);

export default NextLink;
