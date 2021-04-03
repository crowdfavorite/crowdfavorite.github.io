import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import assets from '@views/laravel/web/assets.md';

export default () => (
  <>
    <ActionBar title="Web assets" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={assets} />
    </div>
    <ActionBar />
  </>
);
