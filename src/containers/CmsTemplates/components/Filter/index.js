import React from 'react';
// import PropTypes from 'prop-types';
import RestInputItem from 'components/RestInput/RestInputItem';

const Filter = props => (
  <div {...props}>
    <RestInputItem source="availableType" placeholder="cmsTemplates.availableType" />
    <RestInputItem source="projectTemplateId" placeholder="cmsTemplates.projectTemplateId" />
    <RestInputItem source="type" placeholder="cmsTemplates.type" />
    <RestInputItem source="contents" placeholder="cmsTemplates.contents" />
    <RestInputItem source="metaData" placeholder="cmsTemplates.metaData" />
    <RestInputItem source="path" placeholder="cmsTemplates.path" />
    <RestInputItem source="title" placeholder="cmsTemplates.title" />
  </div>
);

Filter.propTypes = {};

export default Filter;
