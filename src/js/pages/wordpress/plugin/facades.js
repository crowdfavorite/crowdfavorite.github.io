/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import facades from '@views/wordpress/plugin/facades.md';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" nextUrl="/wordpress/plugin/logger" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={facades} />
      </div>
      <ActionBar nextUrl="/wordpress/plugin/logger" />
    </>
  );
}
