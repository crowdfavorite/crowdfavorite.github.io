/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/patterns/factory/factory.md';
import Pre from '@js/components/markdown/pre';

const Factory: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Factory"
      downloadUrl="/assets/downloads/patterns/factory/paymentMethods.php"
      downloadFile="paymentMethods.php"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar />
  </>
);

export default Factory;
