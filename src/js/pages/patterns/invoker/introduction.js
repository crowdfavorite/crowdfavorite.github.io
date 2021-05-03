import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/patterns/invoker/introduction.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Invoker" nextUrl="/patterns/invoker/invokable" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/patterns/invoker/introduction" selected>Introduction</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/patterns/invoker/invokable" />
  </>
);
