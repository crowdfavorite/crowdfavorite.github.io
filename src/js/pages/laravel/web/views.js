/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import views from '@docs/laravel/web/views.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Web views" nextUrl="/laravel/web/assets" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={views}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar nextUrl="/laravel/web/assets" />
    </>
  );
}
