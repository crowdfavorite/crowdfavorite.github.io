import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import phpstan from '@views/code/quality/phpstan.md';

export default () => (
  <>
    <ActionBar title="PhpStan" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={phpstan} />
    </div>
    <ActionBar />
  </>
);
