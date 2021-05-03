import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import routes from '@views/laravel/web/routes.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Web routes" nextUrl="/laravel/web/controllers" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/web/routes" selected>Web routes</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={routes} />
    </div>
    <ActionBar nextUrl="/laravel/web/controllers" />
  </>
);
