/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/laravel/api/controllers.md';
import Pre from '@js/components/markdown/pre';

const Controllers: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Api controllers"
      nextUrl="/laravel/api/request"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/laravel/api/request" />
  </>
);

export default Controllers;
