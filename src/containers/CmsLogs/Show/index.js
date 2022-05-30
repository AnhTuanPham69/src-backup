import React from 'react';
import RestShow from 'containers/rest/Show';
import RestFieldItem from 'components/RestField/RestFieldItem';

const CmsLogsShow = props => (
  <RestShow {...props} hasEdit resource="cmsLogs">
    <RestFieldItem source="cmsId" header="cmsLogs.cmsId" />
    <RestFieldItem source="status" header="cmsLogs.status" />
    <RestFieldItem source="cmsTemplateId" header="cmsLogs.cmsTemplateId" />
    <RestFieldItem source="projectId" header="cmsLogs.projectId" />
    <RestFieldItem source="type" header="cmsLogs.type" />
    <RestFieldItem source="contents" header="cmsLogs.contents" />
    <RestFieldItem source="metaData" header="cmsLogs.metaData" />
    <RestFieldItem source="path" header="cmsLogs.path" />
    <RestFieldItem source="title" header="cmsLogs.title" />
    <RestFieldItem source="lang" header="cmsLogs.lang" />
  </RestShow>
);

export default CmsLogsShow;
