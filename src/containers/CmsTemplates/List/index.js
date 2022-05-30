import React from 'react';
import List from 'containers/rest/List';
import RestFieldItem from 'components/RestField/RestFieldItem';
import ActionGroup from 'components/RestActions/ActionGroup';
import EditButton from 'components/RestActions/EditButton';
import DeleteButton from 'components/RestActions/DeleteButton';

const CmsTemplatesList = props => (
  <List {...props} resource="cmsTemplates">
    <RestFieldItem source="availableType" header="cmsTemplates.availableType" />
    <RestFieldItem source="projectTemplateId" header="cmsTemplates.projectTemplateId" />
    <RestFieldItem source="type" header="cmsTemplates.type" />
    <RestFieldItem source="contents" header="cmsTemplates.contents" />
    <RestFieldItem source="metaData" header="cmsTemplates.metaData" />
    <RestFieldItem source="path" header="cmsTemplates.path" />
    <RestFieldItem source="title" header="cmsTemplates.title" />
    <ActionGroup>
      <EditButton />
      <DeleteButton />
    </ActionGroup>
  </List>
);

CmsTemplatesList.propTypes = {};

export default CmsTemplatesList;
