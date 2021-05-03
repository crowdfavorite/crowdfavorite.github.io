import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import invokable from '@views/patterns/invoker/invokable.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Invoker" downloadUrl="/code/patterns/invoker/invokable.php" downloadFile="invokable.php" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/patterns/invoker/invokable" selected>Invokable</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={invokable} />
    </div>
    <ActionBar />
  </>
);
