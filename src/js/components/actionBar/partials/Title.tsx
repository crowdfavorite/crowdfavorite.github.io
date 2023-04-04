/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }): JSX.Element => (
  <h1>{title}</h1>
);

export default Title;
