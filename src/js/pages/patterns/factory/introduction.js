import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/patterns/factory/introduction.md';

export default () => (
  <>
    <ActionBar title="Factory" nextUrl="/patterns/factory/factory" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/patterns/factory/factory" />
  </>
);
