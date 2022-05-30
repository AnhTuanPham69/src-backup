import React from 'react';
import Create from 'containers/rest/Create';
import Form from '../components/Form';

const CmsTemplatesCreate = props => (
  <Create {...props} resource="cmsTemplates">
    <Form />
  </Create>
);

CmsTemplatesCreate.propTypes = {};

export default CmsTemplatesCreate;
