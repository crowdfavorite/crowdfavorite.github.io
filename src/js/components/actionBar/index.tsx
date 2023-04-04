/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Title from '@js/components/actionBar/partials/Title';
import HomeLink from '@js/components/actionBar/partials/HomeLink';
import NextLink from '@js/components/actionBar/partials/NextLink';
import DownloadLink from '@js/components/actionBar/partials/DownloadLink';

interface Props {
  title?: string;
  downloadUrl?: string;
  downloadFile?: string;
  nextUrl?: string;
}

const Index: React.FC<Props> = ({
  title, downloadUrl, downloadFile, nextUrl,
}): JSX.Element => (
  <div className="action-bar">
    {
        title
          ? <Title title={title} />
          : null
      }
    <div className="actions">
      {
          (downloadUrl && downloadFile)
            ? <DownloadLink downloadUrl={downloadUrl} downloadFile={downloadFile} />
            : null
        }
      <HomeLink />
      {
          nextUrl
            ? <NextLink url={nextUrl} />
            : null
        }
    </div>
  </div>
);

export default Index;
