import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar';
import logger from '@views/wordpress/plugin/logger/index.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Plugin" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/logger" selected>Logger</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={logger} />
    </div>
    <ActionBar />
  </>
);
