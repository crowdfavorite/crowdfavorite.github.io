/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/laravel/web/controllers.md';
import Pre from '@js/components/markdown/pre';

const Controllers: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Web controllers"
      nextUrl="/laravel/web/views"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/laravel/web/views" />
  </>
);

export default Controllers;
