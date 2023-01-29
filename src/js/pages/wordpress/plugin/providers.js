/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import providers from '@views/wordpress/plugin/providers.md';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" nextUrl="/wordpress/plugin/dependency" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={providers} />
      </div>
      <ActionBar nextUrl="/wordpress/plugin/dependency" />
    </>
  );
}
