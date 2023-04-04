/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import MiconArrowRight from '@js/components/micons/MiconArrowRight';

interface Props {
  url: string;
}

const NextLink: React.FC<Props> = ({ url }): JSX.Element => (
  <Link className="action-link" to={url}>
    <MiconArrowRight title="Next" />
    <span className="action-label">Next</span>
  </Link>
);

export default NextLink;
