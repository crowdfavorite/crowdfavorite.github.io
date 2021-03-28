import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import builder from '@views/patterns/builder/builder.md';

export default () => (
  <>
    <ActionBar title="Builder" downloadUrl="/code/patterns/builder/phoneBuilder.php" downloadFile="phoneBuilder.php" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={builder} />
    </div>
    <ActionBar />
  </>
);
