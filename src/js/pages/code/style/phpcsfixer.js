import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import phpcsfixer from '@views/code/style/phpcsfixer.md';

export default () => (
  <>
    <ActionBar title="Php CS Fixer" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={phpcsfixer} />
    </div>
    <ActionBar />
  </>
);
