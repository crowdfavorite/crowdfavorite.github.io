/* eslint-disable react/function-component-definition */
import React from 'react';
import MiconCopy from '@js/components/micons/MiconCopy';

interface Props {
  code: React.ReactElement[];
}

const CopyToClipboard = ({ code }: Props): JSX.Element => {
  const handleClick = () => navigator.clipboard.writeText(code[0].props.children[0]);
  return (
    <button type="button" onClick={handleClick} className="copy" title="Copy to clipboard">
      <MiconCopy />
    </button>
  );
};

export default CopyToClipboard;
