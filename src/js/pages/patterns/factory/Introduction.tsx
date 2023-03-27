/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/patterns/factory/introduction.md';
import Pre from '@js/components/markdown/pre';

const Introduction = (): JSX.Element => (
  <>
    <ActionBar
      title="Factory"
      nextUrl="/patterns/factory/factory"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/patterns/factory/factory" />
  </>
);

export default Introduction;
