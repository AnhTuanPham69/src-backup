import React from 'react';
import Create from 'containers/rest/Create';
import Form from '../components/Form';

const CmsLogsCreate = props => (
  <Create {...props} resource="cmsLogs">
    <Form />
  </Create>
);

CmsLogsCreate.propTypes = {};

export default CmsLogsCreate;
