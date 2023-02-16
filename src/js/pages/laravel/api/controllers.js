/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import controllers from '@docs/laravel/api/controllers.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Api controllers" nextUrl="/laravel/api/request" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={controllers}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar nextUrl="/laravel/api/request" />
    </>
  );
}
