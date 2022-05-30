import React from 'react';
import Edit from '../../rest/Edit';
import Form from '../components/Form';

const ServiceTypeEdit = props => (
  <Edit
    {...props}
    resource="serviceTypes"
    defaultOptions={{
      customApiResource: 'service-types',
    }}
  >
    <Form />
  </Edit>
);

ServiceTypeEdit.propTypes = {};

export default ServiceTypeEdit;
