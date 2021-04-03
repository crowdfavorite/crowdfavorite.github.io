import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import request from '@views/laravel/api/request.md';

export default () => (
  <>
    <ActionBar title="Api request classes" nextUrl="/laravel/api/actions" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={request} />
    </div>
    <ActionBar nextUrl="/laravel/api/actions" />
  </>
);
