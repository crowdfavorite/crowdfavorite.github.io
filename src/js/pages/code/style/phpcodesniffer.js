import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import phpcodesniffer from '@views/code/style/phpcodesniffer.md';

export default () => (
  <>
    <ActionBar title="Php CS Sniffer" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={phpcodesniffer} />
    </div>
    <ActionBar />
  </>
);
