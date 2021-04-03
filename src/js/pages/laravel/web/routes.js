import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import routes from '@views/laravel/web/routes.md';

export default () => (
  <>
    <ActionBar title="Web routes" nextUrl="/laravel/web/controllers" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={routes} />
    </div>
    <ActionBar nextUrl="/laravel/web/controllers" />
  </>
);
