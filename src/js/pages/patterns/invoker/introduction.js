import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/patterns/invoker/introduction.md';

export default () => (
  <>
    <ActionBar title="Invoker" nextUrl="/patterns/invoker/invokable" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/patterns/invoker/invokable" />
  </>
);
