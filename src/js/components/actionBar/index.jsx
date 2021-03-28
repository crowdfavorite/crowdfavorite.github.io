import React from 'react';
import PropTypes from 'prop-types';
import Title from './partials/title.jsx';
import DownloadLink from './partials/downloadLink.jsx';
import MiconLink from './partials/miconLink.jsx';

const Index = ({
  title, downloadUrl, downloadFile, nextUrl,
}) => (
  <div className="action-bar">
    { title
      ? <Title title={title} />
      : null }
    <div className="actions">
      { (downloadUrl && downloadFile)
        ? <DownloadLink downloadUrl={downloadUrl} downloadFile={downloadFile} />
        : null }
      <MiconLink label="Home" url="/" icon="home" />
      { nextUrl
        ? <MiconLink label="Next" url={nextUrl} icon="arrow_forward" />
        : null }
    </div>
  </div>
);

Index.defaultProps = {
  title: null,
  nextUrl: null,
  downloadUrl: null,
  downloadFile: null,
};

Index.propTypes = {
  title: PropTypes.string,
  nextUrl: PropTypes.string,
  downloadUrl: PropTypes.string,
  downloadFile: PropTypes.string,
};

export default Index;
