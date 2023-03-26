/* eslint-disable react/function-component-definition */
import React from 'react';
import CopyToClipboard from '@js/components/markdown/copyToClipboard';

interface Props {
  children: React.ReactElement[];
}

const Pre = ({ children }: Props): JSX.Element => (
  <div className="relative">
    <pre>{children}</pre>
    <div className="absolute top-3 right-4">
      <CopyToClipboard code={children} />
    </div>
  </div>
);

export default Pre;
