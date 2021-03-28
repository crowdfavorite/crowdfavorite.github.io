import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import invokable from '@views/patterns/invoker/invokable.md';

export default () => (
  <>
    <ActionBar title="Invoker" downloadUrl="/code/patterns/invoker/invokable.php" downloadFile="invokable.php" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={invokable} />
    </div>
    <ActionBar />
  </>
);
