import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import providers from '@views/wordpress/plugin/providers.md';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/dependency" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={providers} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/dependency" />
  </>
);
