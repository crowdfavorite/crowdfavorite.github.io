/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import MiconDownload from '@js/components/micons/MiconDownload';

interface Props {
  downloadUrl: string;
  downloadFile: string;
}

const DownloadLink = ({ downloadUrl, downloadFile }: Props): JSX.Element => (
  <a
    className="action-link download"
    href={`${process.env.APP_URL + downloadUrl}`}
    download={downloadFile}
  >
    <MiconDownload size="20px" />
    <span className="action-label">Download the code</span>
  </a>
);

export default DownloadLink;
