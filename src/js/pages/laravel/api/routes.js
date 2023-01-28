/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import routes from '@views/laravel/api/routes.md';
import { Breadcrumb } from '@primer/components';

export default function () {
  return (
    <>
      <ActionBar title="Api routes" nextUrl="/laravel/api/controllers" />
      <Breadcrumb style={{ marginBottom: '2rem' }}>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#/laravel/api/routes" selected>Api routes</Breadcrumb.Item>
      </Breadcrumb>
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={routes} />
      </div>
      <ActionBar nextUrl="/laravel/api/controllers" />
    </>
  );
}
