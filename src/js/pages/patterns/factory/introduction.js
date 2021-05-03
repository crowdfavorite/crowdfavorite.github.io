import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/patterns/factory/introduction.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Factory" nextUrl="/patterns/factory/factory" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/patterns/factory/introduction" selected>Introduction</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/patterns/factory/factory" />
  </>
);
