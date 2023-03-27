/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/laravel/api/routes.md';
import Pre from '@js/components/markdown/pre';

const Routes = (): JSX.Element => (
  <>
    <ActionBar
      title="Api routes"
      nextUrl="/laravel/api/controllers"
    />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar nextUrl="/laravel/api/controllers" />
  </>
);

export default Routes;
