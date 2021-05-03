import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import guidance from '@views/laravel/production/guidance.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Guidance" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/production/guidance" selected>Guidance</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={guidance} />
    </div>
    <ActionBar />
  </>
);
