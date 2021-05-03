import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import actions from '@views/laravel/api/actions.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Api actions" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/laravel/api/actions" selected>Api actions</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={actions} />
    </div>
    <ActionBar />
  </>
);
