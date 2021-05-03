import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/patterns/builder/introduction.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Builder" nextUrl="/patterns/builder/builder" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/patterns/builder/introduction" selected>Introduction</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/patterns/builder/builder" />
  </>
);
