import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import assets from '@views/laravel/web/assets.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Web assets" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/web/assets" selected>Web assets</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={assets} />
    </div>
    <ActionBar />
  </>
);
