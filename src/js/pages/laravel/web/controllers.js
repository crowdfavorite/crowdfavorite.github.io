import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import controllers from '@views/laravel/web/controllers.md';

export default () => (
  <>
    <ActionBar title="Web controllers" nextUrl="/laravel/web/views" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={controllers} />
    </div>
    <ActionBar nextUrl="/laravel/web/views" />
  </>
);
