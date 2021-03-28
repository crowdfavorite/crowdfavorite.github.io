import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import bootstrap from '@views/wordpress/plugin/bootstrap.md';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/providers" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={bootstrap} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/providers" />
  </>
);
