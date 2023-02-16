/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import Pre from '@js/components/pre';
import invokable from '@docs/patterns/invoker/invokable.md';

export default function () {
  return (
    <>
      <ActionBar title="Invoker" downloadUrl="/assets/downloads/patterns/invoker/invokable.php" downloadFile="invokable.php" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={invokable} components={{ pre: Pre }} />
      </div>
      <ActionBar />

    </>
  );
}
