import React from 'react';
import RestInputItem from 'components/RestInput/RestInputItem';

const CmsTemplatesForm = props => (
  <div {...props}>
    <RestInputItem source="availableType" header="cmsTemplates.availableType" />
    <RestInputItem source="projectTemplateId" header="cmsTemplates.projectTemplateId" />
    <RestInputItem source="type" header="cmsTemplates.type" />
    <RestInputItem source="contents" header="cmsTemplates.contents" />
    <RestInputItem source="metaData" header="cmsTemplates.metaData" />
    <RestInputItem source="path" header="cmsTemplates.path" />
    <RestInputItem source="title" header="cmsTemplates.title" />
  </div>
);

CmsTemplatesForm.propTypes = {};

export default CmsTemplatesForm;
