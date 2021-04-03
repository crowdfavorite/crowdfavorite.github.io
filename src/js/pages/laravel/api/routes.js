import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import routes from '@views/laravel/api/routes.md';

export default () => (
  <>
    <ActionBar title="Api routes" nextUrl="/laravel/api/controllers" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={routes} />
    </div>
    <ActionBar nextUrl="/laravel/api/controllers" />
  </>
);
