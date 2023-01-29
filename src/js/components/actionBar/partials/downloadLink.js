/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Download from '@js/components/micons/download';

const DownloadLink = function ({ downloadUrl, downloadFile }) {
  return (
    <a
      className="action-link download"
      href={`${process.env.APP_URL + downloadUrl}`}
      download={downloadFile}
    >
      <Download size="20px" />
      <span className="action-label">Download the code</span>
    </a>
  );
};

DownloadLink.propTypes = {
  downloadUrl: PropTypes.string.isRequired,
  downloadFile: PropTypes.string.isRequired,
};

export default DownloadLink;
