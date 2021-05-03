/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import actions from '@views/laravel/api/actions.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Api actions" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/api/actions" selected>Api actions</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={actions} />
    </div>
    <ActionBar />
  </>
);
