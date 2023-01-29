/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import dependency from '@docs/wordpress/plugin/dependency.md';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" nextUrl="/wordpress/plugin/facades" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={dependency} />
      </div>
      <ActionBar nextUrl="/wordpress/plugin/facades" />
    </>
  );
}
