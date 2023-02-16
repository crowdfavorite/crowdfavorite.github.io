/* eslint-disable react/no-children-prop */
/* eslint-disable func-names */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import factory from '@docs/patterns/factory/factory.md';
import Pre from '@js/components/pre';

export default function () {
  return (
    <>
      <ActionBar title="Factory" downloadUrl="/assets/downloads/patterns/factory/paymentMethods.php" downloadFile="paymentMethods.php" />
      <div className="parser">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children={factory}
          components={{ pre: Pre }}
        />
      </div>
      <ActionBar />
    </>
  );
}
