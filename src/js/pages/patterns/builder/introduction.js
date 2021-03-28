import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/patterns/builder/introduction.md';

export default () => (
  <>
    <ActionBar title="Builder" nextUrl="/patterns/builder/builder" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/patterns/builder/builder" />
  </>
);
