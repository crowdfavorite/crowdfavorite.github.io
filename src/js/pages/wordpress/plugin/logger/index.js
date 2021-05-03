import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar';
import logger from '@views/wordpress/plugin/logger/index.md';

export default () => (
  <>
    <ActionBar title="Plugin" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={logger} />
    </div>
    <ActionBar />
  </>
);
