/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar/index.jsx';
import factory from '@views/patterns/factory/factory.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="Factory" downloadUrl="/code/patterns/factory/paymentMethods.php" downloadFile="paymentMethods.php" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/patterns/factory/factory" selected>Factory</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={factory} />
    </div>
    <ActionBar />
  </>
);
