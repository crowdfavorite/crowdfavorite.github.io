/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import phpcsfixer from '@views/code/style/phpcsfixer.md';
import { Breadcrumb } from '@primer/components';

export default function () {
  return (
    <>
      <ActionBar title="Php CS Fixer" />
      <Breadcrumb style={{ marginBottom: '2rem' }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#/code/style/phpcsfixer" selected>Php CS fixer</Breadcrumb.Item>
      </Breadcrumb>
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={phpcsfixer} />
      </div>
      <ActionBar />
    </>
  );
}
