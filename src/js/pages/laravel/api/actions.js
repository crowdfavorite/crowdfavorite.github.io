import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import actions from '@views/laravel/api/actions.md';

export default () => (
  <>
    <ActionBar title="Api actions" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={actions} />
    </div>
    <ActionBar />
  </>
);
