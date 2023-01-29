/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import requirement from '@views/laravel/development/requirement.md';

export default function () {
  return (
    <>
      <ActionBar title="Requirement" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={requirement} />
      </div>
      <ActionBar />
    </>
  );
}
