/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import structure from '@docs/wordpress/plugin/structure.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" nextUrl="/wordpress/plugin/bootstrap" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={structure} components={{ pre: Pre }} />
      </div>
      <ActionBar nextUrl="/wordpress/plugin/bootstrap" />
    </>
  );
}
