/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import routes from '@views/laravel/api/routes.md';

export default function () {
  return (
    <>
      <ActionBar title="Api routes" nextUrl="/laravel/api/controllers" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={routes} />
      </div>
      <ActionBar nextUrl="/laravel/api/controllers" />
    </>
  );
}
