/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import introduction from '@views/patterns/factory/introduction.md';
import { Breadcrumb } from '@primer/components';

export default function () {
  return (
    <>
      <ActionBar title="Factory" nextUrl="/patterns/factory/factory" />
      <Breadcrumb style={{ marginBottom: '2rem' }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#/patterns/factory/introduction" selected>Introduction</Breadcrumb.Item>
      </Breadcrumb>
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={introduction} />
      </div>
      <ActionBar nextUrl="/patterns/factory/factory" />
    </>
  );
}
