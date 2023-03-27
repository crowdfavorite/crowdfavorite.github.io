/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';

interface Props {
  title: string;
}

const Title = ({ title }: Props): JSX.Element => (
  <h1>{title}</h1>
);

export default Title;
