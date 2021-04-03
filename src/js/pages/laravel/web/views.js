import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import views from '@views/laravel/web/views.md';

export default () => (
  <>
    <ActionBar title="Web views" nextUrl="/laravel/web/assets" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={views} />
    </div>
    <ActionBar nextUrl="/laravel/web/assets" />
  </>
);
