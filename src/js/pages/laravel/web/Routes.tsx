/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/laravel/web/routes.md';
import Pre from '@js/components/markdown/pre';

const Routes: React.FC = (): JSX.Element => (
  <>
    <ActionBar
      title="Web routes"
      nextUrl="/laravel/web/controllers"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/laravel/web/controllers" />
  </>
);

export default Routes;
