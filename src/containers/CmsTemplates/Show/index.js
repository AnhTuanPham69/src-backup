import React from 'react';
import RestShow from 'containers/rest/Show';
import RestFieldItem from 'components/RestField/RestFieldItem';

const CmsTemplatesShow = props => (
  <RestShow {...props} hasEdit resource="cmsTemplates">
    <RestFieldItem source="availableType" header="cmsTemplates.availableType" />
    <RestFieldItem source="projectTemplateId" header="cmsTemplates.projectTemplateId" />
    <RestFieldItem source="type" header="cmsTemplates.type" />
    <RestFieldItem source="contents" header="cmsTemplates.contents" />
    <RestFieldItem source="metaData" header="cmsTemplates.metaData" />
    <RestFieldItem source="path" header="cmsTemplates.path" />
    <RestFieldItem source="title" header="cmsTemplates.title" />
  </RestShow>
);

export default CmsTemplatesShow;
