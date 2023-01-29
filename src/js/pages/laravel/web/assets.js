/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import assets from '@docs/laravel/web/assets.md';

export default function () {
  return (
    <>
      <ActionBar title="Web assets" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={assets} />
      </div>
      <ActionBar />
    </>
  );
}
