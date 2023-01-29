/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import logger from '@docs/wordpress/plugin/logger/index.md';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={logger} />
      </div>
      <ActionBar />
    </>
  );
}
