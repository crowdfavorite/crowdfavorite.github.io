import React from 'react';
import ReactMarkdown from 'react-markdown';
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
      <ReactMarkdown allowDangerousHtml source={controllers} />
    </div>
    <ActionBar nextUrl="/laravel/api/request" />
  </>
);
