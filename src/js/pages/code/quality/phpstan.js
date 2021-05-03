import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import phpstan from '@views/code/quality/phpstan.md';
import { Breadcrumb } from '@primer/components';

export default () => (
  <>
    <ActionBar title="PhpStan" />
    <Breadcrumb style={{ marginBottom: '2rem' }}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#/code/quality/phpstan" selected>PhpStan</Breadcrumb.Item>
    </Breadcrumb>
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={phpstan} />
    </div>
    <ActionBar />
  </>
);
