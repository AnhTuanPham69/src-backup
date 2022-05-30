import React from 'react';
import Edit from 'containers/rest/Edit';
import Form from '../components/Form';

const CmsTemplatesEdit = props => (
  <Edit {...props} resource="cmsTemplates">
    <Form />
  </Edit>
);

CmsTemplatesEdit.propTypes = {};

export default CmsTemplatesEdit;
