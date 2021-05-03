/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import requirement from '@views/laravel/development/requirement.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Requirement" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/development/requirement" selected>Requirements</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={requirement} />
    </div>
    <ActionBar />
  </>
);
