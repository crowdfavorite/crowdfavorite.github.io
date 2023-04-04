/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/wordpress/plugin/providers.md';
import Pre from '@js/components/markdown/pre';

const Providers: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Plugin"
      nextUrl="/wordpress/plugin/dependency"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/dependency" />
  </>
);

export default Providers;
