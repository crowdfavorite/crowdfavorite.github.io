/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import factory from '@views/patterns/factory/factory.md';

export default function () {
  return (
    <>
      <ActionBar title="Factory" downloadUrl="/code/patterns/factory/paymentMethods.php" downloadFile="paymentMethods.php" />
      <div className="parser">
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={factory} />
      </div>
      <ActionBar />
    </>
  );
}
