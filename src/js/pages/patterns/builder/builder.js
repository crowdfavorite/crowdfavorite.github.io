/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import builder from '@docs/patterns/builder/builder.md';
import Pre from '@js/components/markdown/pre';

export default function () {
  return (
    <>
      <ActionBar title="Builder" downloadUrl="/assets/downloads/patterns/builder/phoneBuilder.php" downloadFile="phoneBuilder.php" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={builder} components={{ pre: Pre }} />
      </div>
      <ActionBar />
    </>
  );
}
