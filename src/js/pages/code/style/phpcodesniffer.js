/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import phpcodesniffer from '@docs/code/style/phpcodesniffer.md';

export default function () {
  return (
    <>
      <ActionBar title="Php CS Sniffer" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={phpcodesniffer} />
      </div>
      <ActionBar />
    </>
  );
}
