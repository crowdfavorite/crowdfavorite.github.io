/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
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
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={builder} />
    </div>
    <ActionBar />
  </>
);
