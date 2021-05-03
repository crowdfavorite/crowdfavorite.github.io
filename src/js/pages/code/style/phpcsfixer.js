import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import phpcsfixer from '@views/code/style/phpcsfixer.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Php CS Fixer" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/code/style/phpcsfixer" selected>Php CS fixer</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={phpcsfixer} />
    </div>
    <ActionBar />
  </>
);
