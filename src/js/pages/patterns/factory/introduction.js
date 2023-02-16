/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import introduction from '@docs/patterns/factory/introduction.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Factory" nextUrl="/patterns/factory/factory" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={introduction}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar nextUrl="/patterns/factory/factory" />
    </>
  );
}
