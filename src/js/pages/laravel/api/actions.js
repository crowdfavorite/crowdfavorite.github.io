/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import actions from '@views/laravel/api/actions.md';

export default function () {
  return (
    <>
      <ActionBar title="Api actions" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={actions} />
      </div>
      <ActionBar />
    </>
  );
}
