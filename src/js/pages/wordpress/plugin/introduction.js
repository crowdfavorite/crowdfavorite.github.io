import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import introduction from '@views/wordpress/plugin/introduction.md';

export default () => (
  <>
    <ActionBar title="Plugin" nextUrl="/wordpress/plugin/structure" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={introduction} />
    </div>
    <ActionBar nextUrl="/wordpress/plugin/structure" />
  </>
);
