/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/patterns/invoker/invokable.md';
import Pre from '@js/components/markdown/pre';

const Invokable: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Invoker"
      downloadUrl="/assets/downloads/patterns/invoker/invokable.php"
      downloadFile="invokable.php"
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

export default Invokable;
