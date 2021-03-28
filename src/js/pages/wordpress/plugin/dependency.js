import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import dependency from '@views/wordpress/plugin/dependency.md';

export default () => (
  <>
    <ActionBar title="Plugin" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={dependency} />
    </div>
    <ActionBar />
  </>
);
