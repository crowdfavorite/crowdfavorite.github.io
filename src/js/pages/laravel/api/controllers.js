import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import controllers from '@views/laravel/api/controllers.md';

export default () => (
  <>
    <ActionBar title="Api controllers" nextUrl="/laravel/api/request" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={controllers} />
    </div>
    <ActionBar nextUrl="/laravel/api/request" />
  </>
);
