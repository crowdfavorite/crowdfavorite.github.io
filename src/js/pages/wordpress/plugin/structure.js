import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import structure from '@views/wordpress/plugin/structure.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/bootstrap" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/wordpress/plugin/structure" selected>Structure</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={structure} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/bootstrap" />
  </>
);
