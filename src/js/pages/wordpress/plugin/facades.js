import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import facades from '@views/wordpress/plugin/facades.md';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/logger" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={facades} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/logger" />
  </>
);
