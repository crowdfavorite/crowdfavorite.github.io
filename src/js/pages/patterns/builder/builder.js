/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import builder from '@views/patterns/builder/builder.md';

export default function () {
  return (
    <>
      <ActionBar title="Builder" downloadUrl="/code/patterns/builder/phoneBuilder.php" downloadFile="phoneBuilder.php" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={builder} />
      </div>
      <ActionBar />
    </>
  );
}
