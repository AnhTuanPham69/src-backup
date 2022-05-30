import React from 'react';
import Edit from 'containers/rest/Edit';
import Form from '../components/Form';

const CmsLogsEdit = props => (
  <Edit {...props} resource="cmsLogs">
    <Form />
  </Edit>
);

CmsLogsEdit.propTypes = {};

export default CmsLogsEdit;
