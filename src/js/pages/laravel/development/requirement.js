import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import requirement from '@views/laravel/development/requirement.md';

export default () => (
  <>
    <ActionBar title="Requirement" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={requirement} />
    </div>
    <ActionBar />
  </>
);
