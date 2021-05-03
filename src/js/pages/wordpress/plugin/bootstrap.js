import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import bootstrap from '@views/wordpress/plugin/bootstrap.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/providers" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/bootstrap" selected>Bootstrap</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={bootstrap} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/providers" />
  </>
);
