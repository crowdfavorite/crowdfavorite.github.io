/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/laravel/web/views.md';
import Pre from '@js/components/markdown/pre';

const Views: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Web views"
      nextUrl="/laravel/web/assets"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/laravel/web/assets" />
  </>
);

export default Views;
