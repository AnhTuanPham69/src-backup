import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from 'components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="cmsId" placeholder="cmsLogs.cmsId" />
    <RestInputItem source="status" placeholder="cmsLogs.status" />
    <RestInputItem source="cmsTemplateId" placeholder="cmsLogs.cmsTemplateId" />
    <RestInputItem source="projectId" placeholder="cmsLogs.projectId" />
    <RestInputItem source="type" placeholder="cmsLogs.type" />
    <RestInputItem source="contents" placeholder="cmsLogs.contents" />
    <RestInputItem source="metaData" placeholder="cmsLogs.metaData" />
    <RestInputItem source="path" placeholder="cmsLogs.path" />
    <RestInputItem source="title" placeholder="cmsLogs.title" />
    <RestInputItem source="lang" placeholder="cmsLogs.lang" />
  </div>
);

Filter.propTypes = {};

export default Filter;
