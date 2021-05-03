/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import controllers from '@views/laravel/web/controllers.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Web controllers" nextUrl="/laravel/web/views" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/web/controllers" selected>Web controllers</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={controllers} />
    </div>
    <ActionBar nextUrl="/laravel/web/views" />
  </>
);
