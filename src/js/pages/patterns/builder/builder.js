import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import builder from '@views/patterns/builder/builder.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Builder" downloadUrl="/code/patterns/builder/phoneBuilder.php" downloadFile="phoneBuilder.php" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/patterns/builder/builder" selected>Builder</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={builder} />
    </div>
    <ActionBar />
  </>
);
