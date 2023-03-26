/* eslint-disable react/function-component-definition */
/* eslint-disable react/require-default-props */
import React from 'react';
import Download from '@js/components/micons/Download';

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
    <Download size="20px" />
    <span className="action-label">Download the code</span>
  </a>
);

export default DownloadLink;
