import React from 'react';
import RestInputItem from 'components/RestInput/RestInputItem';

const CmsLogsForm = props => (
  <div {...props}>
    <RestInputItem source="cmsId" header="cmsLogs.cmsId" />
    <RestInputItem source="status" header="cmsLogs.status" />
    <RestInputItem source="cmsTemplateId" header="cmsLogs.cmsTemplateId" />
    <RestInputItem source="projectId" header="cmsLogs.projectId" />
    <RestInputItem source="type" header="cmsLogs.type" />
    <RestInputItem source="contents" header="cmsLogs.contents" />
    <RestInputItem source="metaData" header="cmsLogs.metaData" />
    <RestInputItem source="path" header="cmsLogs.path" />
    <RestInputItem source="title" header="cmsLogs.title" />
    <RestInputItem source="lang" header="cmsLogs.lang" />
  </div>
);

CmsLogsForm.propTypes = {};

export default CmsLogsForm;
