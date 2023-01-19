import React from 'react';
import PropTypes from 'prop-types';

function DownloadLink({ downloadUrl, downloadFile }) {
  return (
    <a
      className="action-link download"
      href={`${process.env.APP_URL + downloadUrl}`}
      download={downloadFile}
    >
      <i className="micon micon-download micon-grey micon-xs" />
      <span className="action-label">Download the code</span>
    </a>
  );
}

DownloadLink.propTypes = {
  downloadUrl: PropTypes.string.isRequired,
  downloadFile: PropTypes.string.isRequired,
};

export default DownloadLink;
