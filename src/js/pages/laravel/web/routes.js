/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import routes from '@docs/laravel/web/routes.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Web routes" nextUrl="/laravel/web/controllers" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={routes}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar nextUrl="/laravel/web/controllers" />
    </>
  );
}
