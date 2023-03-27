/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ActionBar from '@js/components/actionBar';
import markdown from '@docs/code/style/phpcodesniffer.md';
import Pre from '@js/components/markdown/pre';

const Phpcodesniffer = (): JSX.Element => (
  <>
    <ActionBar title="Php CS Sniffer" />
    <div className="parser">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={markdown}
        components={{ pre: Pre }}
      />
    </div>
    <ActionBar />
  </>
);

export default Phpcodesniffer;
