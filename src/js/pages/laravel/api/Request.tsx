/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import request from '@docs/laravel/api/request.md';
import Pre from '@js/components/markdown/pre';

const Request = (): JSX.Element => (
  <>
    <ActionBar
      title="Api request classes"
      nextUrl="/laravel/api/actions"
    />
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

export default Request;
