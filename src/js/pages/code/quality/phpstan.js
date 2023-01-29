/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import phpstan from '@docs/code/quality/phpstan.md';

export default function () {
  return (
    <>
      <ActionBar title="PhpStan" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={phpstan} />
      </div>
      <ActionBar />
    </>
  );
}
