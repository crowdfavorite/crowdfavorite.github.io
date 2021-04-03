import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import guidance from '@views/laravel/production/guidance.md';

export default () => (
  <>
    <ActionBar title="Guidance" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={guidance} />
    </div>
    <ActionBar />
  </>
);
