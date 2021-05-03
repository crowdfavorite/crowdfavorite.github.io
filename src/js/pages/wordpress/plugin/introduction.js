import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/wordpress/plugin/introduction.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/structure" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/introduction" selected>Introduction</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/structure" />
  </>
);
