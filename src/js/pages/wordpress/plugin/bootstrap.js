/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import bootstrap from '@docs/wordpress/plugin/bootstrap.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" nextUrl="/wordpress/plugin/providers" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={bootstrap} components={{ pre: Pre }} />
      </div>
      <ActionBar nextUrl="/wordpress/plugin/providers" />
    </>
  );
}
