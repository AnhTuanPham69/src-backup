import React from 'react';
import Create from '../../rest/Create';
import CreateForm from '../components/Form';

const ServiceTypesCreate = props => (
  <Create
    {...props}
    resource="serviceTypes"
    defaultOptions={{
      customApiResource: 'service-types',
    }}
    formatOnSubmit={({ isActive, ...values }) => ({
      ...values,
      isActive: isActive || false,
    })}
  >
    <CreateForm />
  </Create>
);

ServiceTypesCreate.propTypes = {};

export default ServiceTypesCreate;
