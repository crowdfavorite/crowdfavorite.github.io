import React from 'react';
import ReactMarkdown from 'react-markdown';
import ActionBar from '@js/components/actionBar/index.jsx';
import factory from '@views/patterns/factory/factory.md';

export default () => (
  <>
    <ActionBar title="Factory" downloadUrl="/code/patterns/factory/paymentMethods.php" downloadFile="paymentMethods.php" />
    <div className="parser">
      <ReactMarkdown allowDangerousHtml source={factory} />
    </div>
    <ActionBar />
  </>
);
