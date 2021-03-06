/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import providers from '@views/wordpress/plugin/providers.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/dependency" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/providers" selected>Providers</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={providers} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/dependency" />
  </>
);
