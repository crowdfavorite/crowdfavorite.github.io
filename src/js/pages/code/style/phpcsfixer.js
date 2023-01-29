/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import phpcsfixer from '@views/code/style/phpcsfixer.md';

export default function () {
  return (
    <>
      <ActionBar title="Php CS Fixer" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={phpcsfixer} />
      </div>
      <ActionBar />
    </>
  );
}
