/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import controllers from '@docs/laravel/web/controllers.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Web controllers" nextUrl="/laravel/web/views" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={controllers}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar nextUrl="/laravel/web/views" />
    </>
  );
}
