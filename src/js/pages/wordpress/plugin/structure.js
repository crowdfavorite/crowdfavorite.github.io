import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import structure from '@views/wordpress/plugin/structure.md';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/bootstrap" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={structure} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/bootstrap" />
  </>
);
