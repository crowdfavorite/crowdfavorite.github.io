/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/wordpress/plugin/dependency.md';
import Pre from '@js/components/markdown/pre';

const Dependency = (): JSX.Element => (
  <>
    <ActionBar
      title="Plugin"
      nextUrl="/wordpress/plugin/facades"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/facades" />
  </>
);

export default Dependency;
