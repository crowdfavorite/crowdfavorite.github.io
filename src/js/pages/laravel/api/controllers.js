/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import controllers from '@views/laravel/api/controllers.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Api controllers" nextUrl="/laravel/api/request" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/api/controllers" selected>Api controllers</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={controllers} />
    </div>
    <ActionBar nextUrl="/laravel/api/request" />
  </>
);
