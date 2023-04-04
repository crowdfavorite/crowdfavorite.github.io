/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/patterns/builder/builder.md';
import Pre from '@js/components/markdown/pre';

const Introduction: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Builder"
      downloadUrl="/assets/downloads/patterns/builder/phoneBuilder.php"
      downloadFile="phoneBuilder.php"
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

export default Introduction;
