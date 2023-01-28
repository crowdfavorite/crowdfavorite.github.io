/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import Title from '@js/components/actionBar/partials/title';
import HomeLink from '@js/components/actionBar/partials/homeLink';
import NextLink from '@js/components/actionBar/partials/nextLink';
import DownloadLink from '@js/components/actionBar/partials/downloadLink';

const Index = function ({
  title, downloadUrl, downloadFile, nextUrl,
}) {
  return (
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
};

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
