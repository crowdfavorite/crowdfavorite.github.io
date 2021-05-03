/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import views from '@views/laravel/web/views.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Web views" nextUrl="/laravel/web/assets" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/web/views" selected>Web views</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={views} />
    </div>
    <ActionBar nextUrl="/laravel/web/assets" />
  </>
);
