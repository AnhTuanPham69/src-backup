import React from 'react';
import List from 'containers/rest/List';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';

const CmsLogsList = props => (
  <List {...props} resource="cmsLogs">
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
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

CmsLogsList.propTypes = {};

export default CmsLogsList;
