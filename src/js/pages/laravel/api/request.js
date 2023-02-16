/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import request from '@docs/laravel/api/request.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Api request classes" nextUrl="/laravel/api/actions" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={request}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar nextUrl="/laravel/api/actions" />
    </>
  );
}
