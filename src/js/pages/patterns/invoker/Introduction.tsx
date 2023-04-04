/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/patterns/invoker/introduction.md';
import Pre from '@js/components/markdown/pre.js';

const Invoker: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Invoker"
      nextUrl="/patterns/invoker/invokable"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/patterns/invoker/invokable" />
  </>
);

export default Invoker;
