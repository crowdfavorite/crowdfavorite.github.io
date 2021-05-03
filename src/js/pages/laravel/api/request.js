/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import request from '@views/laravel/api/request.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Api request classes" nextUrl="/laravel/api/actions" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/api/request" selected>Api request</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={request} />
    </div>
    <ActionBar nextUrl="/laravel/api/actions" />
  </>
);
