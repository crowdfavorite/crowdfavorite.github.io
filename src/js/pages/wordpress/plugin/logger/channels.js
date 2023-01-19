/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import loggerChannels from '@views/wordpress/plugin/logger/channels.md';
import { Breadcrumb } from '@primer/components';

export default function () {
  return (
    <>
      <ActionBar title="Plugin" />
      <Breadcrumb style={{ marginBottom: '2rem' }}>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#/wordpress/plugin/logger">Logger</Breadcrumb.Item>
        <Breadcrumb.Item href="#/wordpress/plugin/logger" selected>Channels</Breadcrumb.Item>
      </Breadcrumb>
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={loggerChannels} />
      </div>
      <ActionBar />
    </>
  );
}
