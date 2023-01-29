/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import guidance from '@docs/laravel/production/guidance.md';

export default function () {
  return (
    <>
      <ActionBar title="Guidance" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={guidance} />
      </div>
      <ActionBar />
    </>
  );
}
