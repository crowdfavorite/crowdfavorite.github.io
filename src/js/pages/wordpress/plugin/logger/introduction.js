import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar';
import loggerIntroduction from '@views/wordpress/plugin/logger/introduction.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Plugin" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/logger">Logger</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/logger" selected>Introduction</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={loggerIntroduction} />
    </div>
    <ActionBar />
  </>
);
