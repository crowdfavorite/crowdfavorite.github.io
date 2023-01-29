/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import introduction from '@docs/patterns/builder/introduction.md';

export default function () {
  return (
    <>
      <ActionBar title="Builder" nextUrl="/patterns/builder/builder" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={introduction} />
      </div>
      <ActionBar nextUrl="/patterns/builder/builder" />
    </>
  );
}
